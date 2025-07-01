import express from "express";
import { searchQdrant } from "../qdrant/qdrant.js";
import { checkAuth } from "../middlewares/auth.js";
const router = express.Router();
router.get('/feed', checkAuth, async (request, response)=>{
    try {
        let queryString = "Get me news from ";
        for(const interest of request.user.interests){
            queryString += interest + ","
        }
        const res = await searchQdrant(queryString);
        response.send({status: "Success", result: res});
    } catch (error) {
        console.log(error);
    }
});
router.post('/search', async (request, response, next)=>{
    try {
        const { keyword } = request.body;
        const result = await searchQdrant(keyword);
        response.send({status: "Success", result});
    } catch (error) {
        next(error);
    }
})
export default router;