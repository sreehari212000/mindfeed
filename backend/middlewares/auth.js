import jwt from "jsonwebtoken"
import sqlConnection from "../db/postgres.js";
export const checkAuth = async (req, res, next) => {
    try {
        if(!req.headers['authorization']){
            const error = new Error('You are not authorized!');
            error.statusCode = 401;
            throw error
        }    
        const token = req.headers['authorization'].split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)   
        const user = await sqlConnection.query(`SELECT id, email, interests FROM users WHERE email = $1`, [decodedToken.email]);
        if(!user.rows[0]){
            const error = new Error('You are not authenticated!');
            error.statusCode = 401;
            throw error
        }
        req.user = user.rows[0];
        next();
    } catch (error) {
        console.log("Auth Middleware error", error);
        next(error)
    }
}