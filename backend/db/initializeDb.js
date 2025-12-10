import sqlConnection from "./postgres.js";
const initilizeDb = async () => {
    try {
        await sqlConnection.query(`CREATE TABLE IF NOT EXISTS users (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),  
            email VARCHAR(255) UNIQUE NOT NULL,
            password_hash TEXT NOT NULL, 
            name VARCHAR(100),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            interests TEXT[] DEFAULT '{}',  
            is_active BOOLEAN DEFAULT TRUE
        );`);
        await sqlConnection.query(`
            CREATE TABLE IF NOT EXISTS saved_articles (
            id SERIAL PRIMARY KEY,
            user_id UUID REFERENCES users(id) ON DELETE CASCADE,
            article_id UUID NOT NULL,
            saved_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            UNIQUE (user_id, article_id)
        );`);
        console.log('Database Successfully Initialized');
    } catch (error) {
        console.log("Error initializing database ", error);
    }finally {
        await sqlConnection.end();
    }
}
initilizeDb()