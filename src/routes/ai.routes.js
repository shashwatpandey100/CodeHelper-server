import express from 'express';
import { getReview } from '../controllers/ai.controller.js';

const aiRouter = express.Router();

aiRouter.post("/generate", getReview)

export default aiRouter;