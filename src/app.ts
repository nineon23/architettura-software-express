import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import apiRouter from './api/routes';
import bodyParser from 'body-parser';
//import { errorHandlers } from './errors';

const app = express();

const corsOptions = {
    exposedHeaders: 'Authorization',
};

app.use(cors(corsOptions));
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.set('trust proxy', true);

app.use('/api', apiRouter);
//app.use(errorHandlers);

export default app;