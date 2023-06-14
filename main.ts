// @deno-types="npm:@types/express@4"
import express, { NextFunction, Request, Response } from 'npm:express';
import demoData from './data_blob.json' assert { type: 'json' };

const app = express();
const port = Number(Deno.env.get('PORT')) || 3000;

app.use(function reqLogger(req: Request, res: Response, next: NextFunction): void {
	console.log(`${req.method} request to ${req.url} by ${req.hostname}`);
	next();
});

app.get('/', (req: Request, res: Response, next: NextFunction): void => {
	res.send('Hello World!');
});

app.get('/users', (req: Request, res: Response, next: NextFunction): void => {
	res.json(demoData.users);
});

app.get('/users/:id', (req: Request, res: Response, next: NextFunction): void => {
	const id = Number(req.params.id);
	const user = demoData.users.find((user) => user.id === id);
	if (user) {
		res.json(user);
	} else {
		res.status(400).json({ msg: 'User not found' });
	}
});

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
