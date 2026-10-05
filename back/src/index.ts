import express, {type Express, type Request, type Response} from 'express';
import cors from 'cors';
import pool from '../db/client';

const app: Express = express();
const port = 3000;

app.use(cors());

interface ApiResponse {
    excuse: string;
}

app.get('/excuse', async (req : Request, res: Response) => {
    const random = await pool.query('SELECT * FROM excuses ORDER BY RANDOM() LIMIT 1');

    const jsonResponse: ApiResponse = {
        excuse: random.rows[0].text
    };
    res.status(200).json(jsonResponse);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});