const monngose = require('mongoose')

const PostSchema = new monngose.Schema({
  name: String,
  size: Number,
  key: String,
  url: String,
  path: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = monngose.model("AudioTextos", PostSchema)