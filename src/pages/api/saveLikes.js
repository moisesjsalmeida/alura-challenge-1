import { connectToDatabase } from '../../utils/mongodb';

export default async function handler(req, res) {
  const ObjectId = require('mongodb').ObjectId;

  if (req.method === 'POST') {
    try {
      const { db } = await connectToDatabase();
      // Os likes são contabilizados utilizando um array com os usuários que curtiram
      // Essa condicional checa se um usuário já curtiu um item para adicionar ou excluir no array
      if (req.body.liked) {
        const response = await db
          .collection('projects')
          .findOneAndUpdate(
            { _id: new ObjectId(req.body.projectId) },
            { $pull: { likes: req.body.user } }
          );
        res.status(201).json(response);
      } else {
        const response = await db
          .collection('projects')
          .findOneAndUpdate(
            { _id: new ObjectId(req.body.projectId) },
            { $addToSet: { likes: req.body.user } }
          );
        res.status(201).json(response);
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: 'Error Saving Like' });
    }
  } else {
    res.status(405).json({ error: 'This route accepts POST requests only' });
  }
}
