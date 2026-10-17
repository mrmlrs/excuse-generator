import {Pool} from 'pg';
import * as dotenv from "dotenv";

dotenv.config();

const pool = new Pool(
    process.env.DATABASE_URL ? { connectionString: process.env.DATABASE_URL, ssl: true } :
        {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        port: Number(process.env.DB_PORT),
        database: process.env.DB_NAME
})

export default pool;