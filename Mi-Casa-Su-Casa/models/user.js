const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentsSchema = new Schema({
    
    content: String,
}, {
    timestamps: true
  });




const userSchema = new Schema({
    name: String,
    comments: [commentsSchema],
    googleId: String,
    about: {
        type: String, 

    },
    interests: {
        type: String, 
    },
    city: String,
    dob: {
        type: Date,
       
    },
    email: String,
    phoneNo: Number,
   
  }, {
        timestamps: true
});


  module.exports = mongoose.model('User', userSchema);