import dotenv from "dotenv";
import Express from "express";
import feedRoutes from "./routes/feed.js"
import userRoutes from "./routes/user.js"
import sqlConnection from "./db/postgres.js";
import errorHandler from "./middlewares/errorHandler.js"
dotenv.config()
const app = Express();
app.use(Express.json())
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