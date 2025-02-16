import { generate } from '../utils/ai.service.js';

const getReview = async (req, res) => {
  const { code, question } = req.body;

  if (!code || !question) {
    return res
      .status(400)
      .json({ message: 'Both code and question are required' });
  }

  const prompt = `Code:\n${code}\n\nQuestion:\n${question}`;

  const response = await generate({ prompt });

  res.send(response);
};

export { getReview };
