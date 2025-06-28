import dotenv from "dotenv"
dotenv.config()
export const fetchFromApi = async () =>{
    try {
        const response = await fetch('https://api.worldnewsapi.com/top-news?source-country=in&language=en', {
            headers: {
                'x-api-key': process.env.NEWS_API_KEY
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log('Error fetching data from API', error);
    }
}


