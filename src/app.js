import express from 'express';
import dotenv from 'dotenv';
import aiRouter from './routes/ai.routes.js'
import cors from 'cors';

dotenv.config({
  path: './.env',
});

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1', aiRouter);

app.get('/', (req, res) => {
  res.send('API is running 🏃‍♂️!');
});

app.get('/health', (req, res) => {
  res.send('API is running 🏃‍♂️!');
});

export default app;
