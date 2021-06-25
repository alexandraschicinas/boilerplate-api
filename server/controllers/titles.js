import express from 'express';
import Articles from '../models/articles';
import logger from '../../services/serverLogger';

const router = new express.Router();

router.get('/getAllTitles', (req, res) => {
  Articles.find({})
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      const { message = 'Something went wrong.' } = error;
      logger.error(message);
      res.send(message);
    });
});

router.post('/title', (req, res) => {
  const { title } = req.body;
  Articles.create({ title })
    .then(newTitle => {
      console.log(newTitle);
      res.send(newTitle);
    })
    .catch(error => {
      console.log(error);
      const { message = 'Something went wrong.' } = error;
      logger.error(message);
      res.send(message);
    });
});

router.put('/word', (req, res) => {
  const { _id, word } = req.body;
  Articles.findByIdAndUpdate(
    _id,
    {
      $push: { words: word }
    },
    { new: true }
  )
    .then(response => {
      console.log(response, 'ha');
      res.send(true);
    })
    .catch(error => {
      const { message = 'Something went wrong.' } = error;
      // logger.error(message);
      console.log(message, 'hi');
      res.status(400).send(message);
    });
});

export default router;
