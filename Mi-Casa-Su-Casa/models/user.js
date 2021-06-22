const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewsSchema = new Schema({
    title: {
        type: String,
        
    },
    ranking: String,
    content: String,
}, {
    timestamps: true
  });


const userSchema = new Schema({
    name: String,
    city: String,
    dob: {
        type: Date,
       
    },
    reviews: [reviewsSchema],
    googleId: String,
   
  }, {
        timestamps: true
});


  module.exports = mongoose.model('User', userSchema);