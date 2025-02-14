import { generate, generateDeepSeek } from '../utils/ai.service.js';

const getReview = async (req, res) => {
  const code = req.body.code;

  if (!code) {
    return res.status(400).json({ message: 'Code is required' });
  }

  const response = await generate({ prompt: code });

  res.send(response);
};

export { getReview };
