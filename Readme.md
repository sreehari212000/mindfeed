# MIND FEED
### A full-stack AI-powered personalised news discovery engine with semantic search using Qdrant and real-time news ingestion.
## TECH STACK
### FRONTEND
- React Js
- Tailwind CSS
- Daisy UI
### BACKEND
- Node js
- Express js
- Postgres SQL
- Qdrant DB
- Hugging Face Transformer Model
- Bcrypt Js
- JWT
### FEATURES

#### 📰 Real-time News Fetching
Automatically fetches the latest news articles from a public News API at regular intervals using a scheduled cron job.
#### 🧠 Semantic Embedding Generation
Uses Hugging Face’s sentence-transformers/all-MiniLM-L6-v2 model to convert article content into meaningful vector embeddings.
#### 🗃️ Vector Storage with Qdrant
Stores and indexes article embeddings in Qdrant for fast and accurate semantic search.
#### 🧾 Metadata Storage with PostgreSQL
Stores article metadata and user-related data in PostgreSQL for relational access and data integrity.
#### 🔍 Semantic Search API
Allows users to search for news based on topics or phrases. The system understands meaning, not just exact keywords.
#### 🧑‍💼 User Management
Users can sign up, log in, and save articles they’re interested in.

#### 💾 Save Articles
Users can bookmark articles. Each user can only save an article once (with uniqueness enforced in the DB).
#### 📱 Frontend UI
Clean and responsive frontend built using React.js, Tailwind CSS and Shad CN.
#### 📦 Dockerized Setup 
The entire app will be containerized using Docker for easy deployment.
## TODO
#### ☁️ Cloud Deployment with AWS EKS 
Will be deployed on AWS using Elastic Kubernetes Service for scalability.
