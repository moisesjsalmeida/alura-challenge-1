import { connectToDatabase } from '../../utils/mongodb';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { db } = await connectToDatabase();
      const data = await db.collection('projects').find({}).toArray();
      res.status(200).json(data);
    } catch (e) {
      res.status(400).json({ error: 'Error Retrieving Posts' });
    }
  } else {
    res.status(405).json({ error: 'This route accepts GET requests only' });
  }
}
