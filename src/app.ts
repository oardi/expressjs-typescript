import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
	res.send('Hello');
});

app.use((req, res, next) => {
	res.status(404).send("Not found!")
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
	console.error(err);
	res.status(500).send('Something broke!');
});

app.listen(PORT, () => console.log('Listening on port %d', PORT));
