const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentsSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    },
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
        type: String,
       
    },
    email: String,
    phoneNo: Number,
   
  }, {
        timestamps: true
});


  module.exports = mongoose.model('User', userSchema);