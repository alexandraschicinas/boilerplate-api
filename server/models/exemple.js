const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { Schema } = mongoose;

const exempleSchema = new Schema(
  {
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true }
  },
  { emitIndexErrors: true }
);

export default mongoose.model('Exemple', exempleSchema);
