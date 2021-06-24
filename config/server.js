import env from '../services/env';

env.restrictToServer();
export default {
  dbURL: process.env.MONGODB_URI
};
