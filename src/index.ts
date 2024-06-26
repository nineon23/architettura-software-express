import 'reflect-metadata';

import app from './app';
import mongoose from 'mongoose';
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI;

mongoose.set('debug', true);
mongoose.connect(DB_URI!)
    .then(_ => {
        console.log('Connected to db');
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });

    })
    .catch(err => {
        console.error(err);
    })
