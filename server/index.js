import express from 'express';
import compression from 'compression';
import cors from 'cors';
import bodyParser from 'body-parser';
import env from '../services/env';
import mongoose from './mongoose';
import controllers from './controllers/';

const port = process.env.PORT || 8080;

const app = express();
if (env.isProd()) {
  app.use(compression());
}
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

app.use('/api', controllers);

mongoose.connect();
app.listen(port, () => {
  console.log(`API server is listening on port ${port}`);
});
