import express, { json } from "express";
import sqlConnection from "../db/postgres.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
const router = express.Router();
router.post('/signup', async (request, response, next)=>{
    try {
        const {name, email, password, interests} = request.body      
        if(!name || !email || !password || !interests){
            const error = new Error("Please fill in all the fields");
            error.statusCode = 400;
            throw error;
        }
        const salt = await bcrypt.genSalt(10);
        const password_hash = await bcrypt.hash(password, salt);
        await sqlConnection.query(`INSERT INTO users (name, email, password_hash, interests) VALUES ($1, $2, $3, $4)`, [name, email, password_hash, interests]);
        response.send({msg: "Success"})
    } catch (error) {
        console.log("Error signing up user", error);
        if (error.code === '23505') {
            error.message = 'Email already exists';
            error.statusCode = 409;
        }
        next(error)
    }
})
router.post('/signin', async(request, response, next)=>{
    try {
        const {email, password} = request.body;
        const result = await sqlConnection.query(`SELECT * FROM users WHERE email = $1`, [email]);
        if(result.rowCount === 0){
            const error = new Error(`Could not find a user with this email`);
            error.statusCode = 404;
            throw error
        }
        const isPasswordMatching = await bcrypt.compare(password, result.rows[0].password_hash);        
        if(!isPasswordMatching){
            const error = new Error("You provided wrong credentials");
            error.statusCode = 401;
            throw error
        }
        const token = jwt.sign({email}, process.env.JWT_SECRET)
        response.status(200).send({status: "Success", token});
    } catch (error) {
        console.log("Error signing in user ", error);
        next(error);
    }
})
export default router