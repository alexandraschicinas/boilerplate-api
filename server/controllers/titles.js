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
    { new: true },
    (err, result) => {
      if (err) {
        const { message = 'Something went wrong.' } = err;
        res.status(400).send(message);
        console.log(err);
      } else {
        res.send(result);
        console.log('Deleted User : ', result);
      }
    }
  );
});

router.delete('/delete', (req, res) => {
  const { _id } = req.query;
  Articles.findByIdAndDelete(_id, (err, result) => {
    if (err) {
      const { message = 'Something went wrong.' } = err;
      res.status(400).send(message);
      console.log(err);
    } else {
      res.send(result._id);
      console.log('Deleted User : ', result);
    }
  });
});
export default router;
