var mongoose = require('mongoose');

// Book schema
var bookSchema = mongoose.Schema({
 
  title: {
      type:String,
      required:true
  },
  genre: {
      type:String,
      required:true
  },
  description: {
      type:String,
      required:true
  },
  author: {
      type:String,
      required:true
  },
  publisher: {
      type:String
  },
  pages: {
      type:String
  },
  image_url: {
      type:String
  },
  create_date:{
       type:Date,
       default:Date.now
  }
});

var Book = module.exports = mongoose.model('Book',bookSchema);





