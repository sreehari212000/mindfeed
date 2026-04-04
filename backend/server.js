import dotenv from "dotenv";
import Express from "express";
import feedRoutes from "./routes/feed.js"
import userRoutes from "./routes/user.js"
import sqlConnection from "./db/postgres.js";
import errorHandler from "./middlewares/errorHandler.js"
import cors from "cors"
import client from "prom-client"
import { http_request_counter, http_request_duration } from "./middlewares/monitoring.js";
dotenv.config()
const app = Express();
app.use(Express.json())
app.use(cors({
    origin: "*",
    allowedHeaders: "*"
}))
// middleware which calculates the metrics of this server.
app.use((req, res, next) => {
    const start = Date.now()
    res.on("finish", () => {
        const duration = (Date.now() - start) / 1000
        const labels = {
            method: req.method,
            route: req.route ? req.route.path : req.path,
            status_code: res.statusCode,
        };
        http_request_counter.inc(labels)
        http_request_duration.observe(labels, duration)
    })
    next()
})
app.get("/metrics", async(req, res) => {
    res.set("Content-Type", client.register.contentType)
    res.end(await client.register.metrics())
})
app.use('/api/news', feedRoutes)
app.use('/api/users', userRoutes)
app.use(errorHandler)
let server
const startServer = async () => {
    try {
        await sqlConnection.query("SELECT 1");
        console.log('Connected to the database');
        server = app.listen(process.env.PORT || 3000, ()=>{
            console.log(`Server started on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.log("Error starting server ", error);
        process.exit(1);
    }
}
startServer();
const gracefulShutdown = async () => {
    console.log('Shutting down...');
    try {
        if(server){
            server.close(()=>{
                console.log('Http server closed');
            });
        }
        await sqlConnection.end()
        console.log('SQL Connection closed');
        process.exit(0);
    } catch (error) {
        console.log('Error during graceful shutdown => ', error);
        process.exit(1);
    }
}
process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);