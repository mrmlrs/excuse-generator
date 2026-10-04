import express, {type Express, type Request, type Response} from 'express';
import cors from 'cors';

const app: Express = express();
const port = 3000;

app.use(cors());

interface ApiResponse {
    excuse: string;
}

const excuses: string[] = ["I didn't know", "I was sleeping", "I wasn't there", "I missed the bus"];

app.get('/excuse', (req : Request, res: Response) => {
    const random = excuses[Math.floor(Math.random() * excuses.length)] as string;

    const jsonResponse: ApiResponse = {
        excuse: random
    };
    res.status(200).json(jsonResponse);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});