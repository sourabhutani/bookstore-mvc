
var express= require('express');
var router=express.Router();

var bookController=require('../controllers/bookController');
var genreController=require('../controllers/genreController');

// define the home page route
router.get('/', function (req, res) {
  res.send('Home Page.')
});


/*
* Routes list related
* to books
*/

// Api page get all books details
router.route('/api/books').get(bookController.getBooks);

// Api page to get books details by id
router.route('/api/books/:id').get(bookController.getBookbyId);

// Api page to add book
router.route('/api/books').post(bookController.addBook);

// Api page to update books value
router.route('/api/books/:id').put(bookController.updateBook);

// Api page to delete books value
router.route('/api/books/:id').delete(bookController.deleteBook);





/* 
* Routes list related
* to geners
*/

// Api page get genres value
router.route('/api/genres').get(genreController.getGenres);

// Api page to add genre
router.route('/api/genres').post(genreController.addGenre);

// Api page to update genre value
router.route('/api/genres/:id').put(genreController.updateGenre);

// Api page to delete genre value
router.route('/api/genres/:id').delete(genreController.deleteGenre);

module.exports=router;