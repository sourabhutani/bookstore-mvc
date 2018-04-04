var mongoose = require('mongoose');

// Genre schema
var genreSchema = mongoose.Schema({
 
  name: {
      type:String,
      required:true
  },
  create_date:{
       type:Date,
       default:Date.now
  }
});

var Genere = module.exports = mongoose.model('Genre',genreSchema);
