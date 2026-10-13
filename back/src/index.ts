import 'dotenv/config';
import express, {type Express, type Request, type Response} from 'express';
import cors from 'cors';
import pool from './db/client.js';

const app: Express = express();
const port = Number(process.env.PORT) || 3000;

app.use(cors({
    origin: process.env.ALLOWED_ORIGIN
}));

interface ApiResponse {
    excuse: string;
    image: string;
    sound: string;
}

app.get('/excuse', async (req : Request, res: Response) => {
    try {
        const random = await pool.query('SELECT * FROM excuses ORDER BY RANDOM() LIMIT 1');

        const jsonResponse: ApiResponse = {
            excuse: random.rows[0].text,
            image: random.rows[0].image,
            sound: random.rows[0].sound
        };
        res.status(200).json(jsonResponse);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});