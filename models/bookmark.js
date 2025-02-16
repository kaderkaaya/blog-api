const mongoose = require('mongoose'); 

const bookmarkSchema =   new mongoose.Schema(
    {
        userId : {type :String},
        blogId : {type :String},
    },
    { timestamps: {
        createdAt: 'createdAt',
        updatedAt :'updatedAt',
    } }
)

module.exports = new mongoose.model('Bookmark', bookmarkSchema,'bookmarks');