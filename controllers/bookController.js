var express= require('express');
var app=express();
var mongoose = require('mongoose');
var _ = require('lodash');
var Book =require('../models/book');


// Api page to get books
exports.getBooks=(req,res)=>{
    Book.find( {},(error,response)=>{
        if(error)
            res.json({
                "status": "empty",
                "error": "404 Page Not Found"
            });
        // res.json(response);
        res.json({
            "status": true,
            "respData": {
                 response
            }
        }
        )
    });
}

// Api page to get book by id
exports.getBookbyId=(req,res)=>{
    Book.findById(req.params.id,(error,response)=>{
        if(error)
            res.json({
                "status": "empty",
                "error": "404 Page Not Found"
            });
        // res.json(response);
        res.json({
            "status": true,
            "respData": {
                 response
            }
        }
        )
    });

  }


// Api page to add book
exports.addBook=(request,response)=>{
    var book = new Book({
        title:  request.body.title,
        genre:   request.body.genre,
        description:   request.body.description,
        author: request.body.author,
        pages:     request.body.pages,
        publisher: request.body.publisher,
        image_url: request.body.image_url,
        create_at:new Date(),
        updated_at:request.body.updated_at
    });
    //creating the book document in the collections
    book.save((error,res)=>{
        if(error)
        return error;
        else
        {
            response.json({
                success:true,
                body:res
            })
        }
    })
}

// Api page to update book by id
exports.updateBook=(request,response)=>{
  // console.log(req.params.id);
  var id = request.params.id;
  var body = _.pick(request.body,['title','genre','description','author','pages','publisher','image_url','create_at']);
    Book.findOneAndUpdate({_id: mongoose.Types.ObjectId(request.params.id)},{$set: body},{ new: true }, (error,res)=>{
       if(error)
        return error;
        else
        {
            response.json({
                success:true,
                body:res
            })
        }
    });
  }


// Api page to delete book by id
exports.deleteBook=(req,res)=>{
  // console.log(req.params.id);
    Book.deleteOne({_id: mongoose.Types.ObjectId(req.params.id)},(error,response)=>{
        if(error)
            res.json({
                "status": "empty",
                "error": "404 Page Not Found"
            });
        // res.json(response);
        res.json({
            "status": true,
            "respData": {
                 response
            }
        }
        )
    });

  }
