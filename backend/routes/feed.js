import express from "express";
import { getTextEmbedding } from "../utils/embed.js";
import { searchQdrant } from "../utils/qdrant.js";
const router = express.Router();
router.get('/', async (request, response)=>{
    try {
        // const {} = request.body
        const res = await searchQdrant("get me news of tech");
        console.log(res);
        response.send(res)
    } catch (error) {
        console.log(error);
    }
})
export default router