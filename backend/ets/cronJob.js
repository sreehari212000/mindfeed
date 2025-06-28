import { processNewsArrayAndStoreInQdrant } from "./qdrant";

const cronJob = async () => {
    const newsData = await fetchFromApi();
    await processNewsArrayAndStoreInQdrant(newsData)
    console.log('Stored data in qdrant');
    setTimeout(cronJob, 20000);
};
cronJob();