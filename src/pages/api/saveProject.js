import { connectToDatabase } from '../../utils/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { db } = await connectToDatabase();
    const data = req.body;
    const response = await db.collection('projects').insertOne(data);
    res.status(201).json(response);
  } else {
    res.status(405).json({ error: 'This route accepts POST requests only' });
  }
}
