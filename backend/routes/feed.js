import express from "express";
import { searchQdrant } from "../qdrant/qdrant.js";
import { checkAuth } from "../middlewares/auth.js";
const router = express.Router();
router.get('/feed', checkAuth, async (request, response, next)=>{
    try {
        const page = Number(request.query.page) || 1
        const pageSize = Number(request.query.pageSize) || 20

        if (isNaN(page) || isNaN(pageSize) || page < 1 || pageSize < 1) {
            return response.status(400).send({ status: 'fail', message: 'Invalid pagination parameters' })
        }

        let queryString = "Get me news from ";
        for(const interest of request.user.interests){
            queryString += interest + ","
        }

        const offset = (page - 1) * pageSize
        const res = await searchQdrant(queryString, offset, pageSize)

        response.send({
            status: "success",
            result: res,
            page,
            pageSize,
            hasMore: Array.isArray(res) ? res.length === pageSize : false,
        });
    } catch (error) {
        console.log(error);
        next(error)
    }
});
router.get('/latest', async(request, response, next)=>{
    try {
        const queryString = "latest news"
        const page = Number(request.query.page) || 1
        const pageSize = Number(request.query.pageSize) || 20

        if (isNaN(page) || isNaN(pageSize) || page < 1 || pageSize < 1) {
            return response.status(400).send({ status: 'fail', message: 'Invalid pagination parameters' })
        }

        const offset = (page - 1) * pageSize
        const res = await searchQdrant(queryString, offset, pageSize)

        response.send({
            status: "success",
            result: res,
            page,
            pageSize,
            hasMore: Array.isArray(res) ? res.length === pageSize : false,
            msg: "this is working fine"
        })
    } catch (error) {
        console.log(error);
        next(error)
    }
})
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