import { connectToDatabase } from '../../utils/mongodb';

export default async function handler(req, res) {
  const ObjectId = require('mongodb').ObjectId;
  if (req.method === 'POST') {
    try {
      const { db } = await connectToDatabase();
      const data = req.body;
      data.createdAt = new Date();
      const responseComments = await db.collection('comments').insertOne(data);
      const responseProject = await db
        .collection('projects')
        .findOneAndUpdate(
          { _id: new ObjectId(req.body.projectId) },
          { $addToSet: { comments: responseComments.insertedId } }
        );
      res.status(201).json(responseComments);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: 'Error Saving Comment' });
    }
  } else {
    res.status(405).json({ error: 'This route accepts POST requests only' });
  }
}
