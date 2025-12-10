import {QdrantClient} from "@qdrant/js-client-rest"
import { getTextEmbedding } from "./embed.js"
import { config } from "dotenv"
config()
const COLLECTION = 'articles'
const qdrantHost = process.env.QDRANT_HOST
const qdrantport = process.env.QDRANT_PORT
const qdrantClient = new QdrantClient({url: `http://${qdrantHost}:${qdrantport}`})
export const initializeCollection = async () => {
    await qdrantClient.createCollection(COLLECTION, {
        vectors: {
            size: 384,
            distance: 'Dot'
        }
    }).catch(()=>{})
    .finally(() => console.log('Successfully initialised qdrant collection'))
}
export const insertIntoQdrant = async (id, vector, payload) => {
    try {
        await qdrantClient.upsert(COLLECTION, {
            points: [
                {
                    id,
                    vector,
                    payload
                }
            ]
        })
    } catch (error) {
        console.log('Could not insert into Qdrant ', error);
    }
}
export const processNewsArrayAndStoreInQdrant = async (newsData) => {
    const result = []
    for (const el of newsData.top_news){
        const {news} = el
        for (const n of news){
            const newd = {id: n.id, title: n.title, text: n.text, url: n.url, publish_date: n.publish_date, image: n.image, author: n.author}
            try {
                const vector = await getTextEmbedding(n.text);
                await insertIntoQdrant(n.id, vector, {title: n.title, text: n.text, url: n.url, publish_date: n.publish_date, image: n.image, author: n.author})
            } catch (error) {
                console.log(error);
            }
        } 
    }
}
export const searchQdrant = async (text, offset = 0) => {
    try {
        const vector = await getTextEmbedding(text);
        console.log("ENV VALUES", qdrantHost, qdrantport);
        const data = await qdrantClient.search(COLLECTION, {
            vector,
            limit: 20,
            offset
        })
        return data;
    } catch (error) {
        console.log("Error searching in Qdrant ", error);
    }
}

const batchSearch = async () => {
    try {
        const result = await qdrantClient.retrieve(COLLECTION, {
            ids: [328928560, 328929778]
        })
        console.log(result);
    } catch (error) {
        console.log(error);
        
    }
}
// batchSearch()