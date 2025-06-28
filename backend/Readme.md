# BACKEND OF MINDFEED
### Technologies and Tools Used
- Node JS
- Express JS
- Postgres SQL
- Qdrant DB
- Hugging Face Embedding Model
- API from which the news is being fetched -> https://worldnewsapi.com/

### Setting up Locally
Make sure you have node and npm in you machine.

- To run Qdrant, using docker would be the easy way.
```
docker run -d -p 6333:6333 -v mindfeed-db qdrant/qdrant
```
- Install the required dependencies
```
npm install
```
- Initialize Qdrant DB and create a collection to store the news articles.
```
npm run initialize-qdrant-collection
```
- Start the server 
```
npm start
```