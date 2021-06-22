const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentsSchema = new Schema({
    
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
    comments: [commentsSchema],
    googleId: String,
    email: String,
   
  }, {
        timestamps: true
});


  module.exports = mongoose.model('User', userSchema);