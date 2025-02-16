const mongoose = require('mongoose'); 

const likeSchema =   new mongoose.Schema(
    {
        userId : { type :String },
        blogId : { type :String },
    },
    { timestamps: {
        createdAt: 'createdAt',
        updatedAt :'updatedAt',
    } }
)

module.exports = new mongoose.model('Like', likeSchema,'likes');