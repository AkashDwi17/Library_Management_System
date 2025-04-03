import express from 'express';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { connectDB } from './database/db.js';
import { errorMiddleware } from './middlewares/errorMiddlewares.js';
import authRouter from './routes/authRouter.js';
import bookRouter from './routes/bookRouter.js'; 
import borrowRouter from './routes/borrowRouter.js';  // FIXED: Default import matches borrowRouter.js

export const app = express();

config({ path: './config/config.env' });

app.use(
    cors({
        origin: process.env.FRONTEND_URL,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true,
    })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/book', bookRouter);
app.use('/api/v1/borrow', borrowRouter);  // FIXED: Uncommented this to enable borrow routes

connectDB();

app.use(errorMiddleware);

// import express from 'express';
// import { config } from 'dotenv';
// import cookieParser from 'cookie-parser';
// import cors from 'cors';
// import { connectDB } from './database/db.js';
// import { errorMiddleware } from './middlewares/errorMiddlewares.js';
// import authRouter from './routes/authRouter.js';
// import bookRouter from './routes/bookRouter.js'; 
// import borrowRouter from './routes/borrowRouter.js';

// export const app = express();

// config({ path: './config/config.env' });

// app.use(
//     cors({
//         origin: process.env.FRONTEND_URL,
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         credentials: true,
//     })
// );

// app.use(cookieParser());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use('/api/v1/auth', authRouter);
// app.use('/api/v1/book', bookRouter);
// // app.use('/api/v1/borrow', borrowRouter);
// connectDB();

// app.use(errorMiddleware);
