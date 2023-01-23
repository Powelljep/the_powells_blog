const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: String,
  content: {
    type: String,
    required: true,
  },
  date:{ type: Date, default: Date.now},
  like:[{
    type: Boolean,
    default: false
  }]
});

module.exports = mongoose.model('Artilce', articleSchema);
