import { connectToDatabase } from '../../utils/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { db } = await connectToDatabase();
      const data = req.body;
      data.createdAt = new Date();
      const response = await db.collection('comments').insertOne(data);
      res.status(201).json(response);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: 'Error Saving Comment' });
    }
  } else {
    res.status(405).json({ error: 'This route accepts POST requests only' });
  }
}
