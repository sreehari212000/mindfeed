import {Pool} from "pg"
import {config} from "dotenv";
config()
const sqlConnection = new Pool({
    host: process.env.POSTGRES_SQL_HOST,
    password: process.env.POSTGRES_SQL_PASSWORD,
    port: process.env.POSTGRES_SQL_PORT,
    user: process.env.POSTGRES_SQL_USER,
    database: process.env.POSTGRES_SQL_DATABASE
});
export default sqlConnection
