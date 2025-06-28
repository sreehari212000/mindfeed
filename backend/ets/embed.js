import { pipeline } from "@xenova/transformers";
const embedModel = await pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2");
export async function getTextEmbedding(text) {
    const output = await embedModel(text, { pooling: "mean", normalize: true });    
    return Array.from(output.data)
}

