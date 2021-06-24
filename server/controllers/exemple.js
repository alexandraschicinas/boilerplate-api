import express from 'express';
import Exemple from '../models/exemple';
import logger from '../../services/serverLogger';

const router = new express.Router();

// Adds a new document to Exemple collection
router.post('/register', (req, res) => {
  const { username, password } = req.body;
  Exemple.create({ username, password })
    .then(() => {
      res.send({ message: 'Account created.', username });
    })
    .catch(error => {
      const { message = 'Something went wrong.' } = error;
      logger.error(message);
      res.send(message);
    });
});

// Returns all documents from Exemple collection
router.get('/getAll', (req, res) => {
  Exemple.find({})
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      const { message = 'Something went wrong.' } = error;
      logger.error(message);
      res.send(message);
    });
});

export default router;
