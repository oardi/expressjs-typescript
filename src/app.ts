import express, { Application, Request, Response, NextFunction } from 'express';
import { logger } from './middleware/logger';

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(logger);
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
	res.send('hello');
})

app.use((req, res, next) => {
	res.status(404).send("Not found!")
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
	console.error(err);
	res.status(500).send('Something broke!');
});

app.listen(PORT, () => console.log('Listening on port %d', PORT));
