import { connectToDatabase } from '../../utils/mongodb';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { db } = await connectToDatabase();
    const data = await db.collection('projects').find({}).toArray();
    res.status(201).json(data);
  } else {
    res.status(405).json({ error: 'This route accepts GET requests only' });
  }
}
