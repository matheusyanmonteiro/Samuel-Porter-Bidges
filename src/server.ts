import { err } from './errors/err';
import express from 'express';
import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(routes);
app.use(err);

app.listen(3076, () => console.log('Server is running 🤡'));
