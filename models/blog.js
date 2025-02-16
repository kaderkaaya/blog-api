const mongoose = require('mongoose'); 

const blogSchema =   new mongoose.Schema(
    {
        title : { type: String },
        blog : { type : String },
        imageUrl : { type :String },
        likeCount : { type : Number,default : 0 },
        views :{ type : Number,default : 0 },
        category : {type: String },
        userId : {type :String},
    },
    { timestamps: {
        createdAt: 'createdAt',
        updatedAt :'updatedAt',
    } }
)

module.exports = new mongoose.model('Blog', blogSchema,'blogs');