const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { Schema } = mongoose;

const wordsSchema = new Schema({
  value: { type: String, required: true }
});

const articleSchema = new Schema(
  {
    title: { type: String, required: true },
    words: { type: [wordsSchema], default: [] }
  },
  { emitIndexErrors: true }
);

export default mongoose.model('Articles', articleSchema);
