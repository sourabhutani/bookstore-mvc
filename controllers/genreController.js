var express= require('express');
var app=express();
var mongoose = require('mongoose');
var _ = require('lodash');
var Genre =require('../models/genre');

// Api page to get genres
exports.getGenres=(req,res)=>{
    Genre.find( {},(error,response)=>{
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



// Api page to add genre
exports.addGenre=(request,response)=>{
    var genre = new Genre({
        name:  request.body.name,
        create_at:new Date()
    });
    //creating the genre document in the collections
    genre.save((error,res)=>{
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

// Api page to update genre by id
exports.updateGenre=(request,response)=>{
  // console.log(req.params.id);
  var id = request.params.id;
  var body = _.pick(request.body,['name','create_at']);
    Genre.findOneAndUpdate({_id: mongoose.Types.ObjectId(request.params.id)},{$set: body},{ new: true }, (error,res)=>{
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


// Api page to delete genre by id
exports.deleteGenre=(req,res)=>{
  // console.log(req.params.id);
    Genre.deleteOne({_id: mongoose.Types.ObjectId(req.params.id)},(error,response)=>{
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