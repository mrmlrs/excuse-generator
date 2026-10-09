import express, {type Express, type Request, type Response} from 'express';
import cors from 'cors';
import pool from './db/client.js';

const app: Express = express();
const port = 3000;

app.use(cors({
    origin: process.env.ALLOWED_ORIGIN
}));

interface ApiResponse {
    excuse: string;
    image: string;
    sound: string;
}

app.get('/excuse', async (req : Request, res: Response) => {
    const random = await pool.query('SELECT * FROM excuses ORDER BY RANDOM() LIMIT 1');

    const jsonResponse: ApiResponse = {
        excuse: random.rows[0].text,
        image: random.rows[0].image,
        sound: random.rows[0].sound
    };
    res.status(200).json(jsonResponse);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});