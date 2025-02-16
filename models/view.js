const mongoose = require('mongoose'); 

const viewSchema =   new mongoose.Schema(
    {
        userId : { type :String },
        blogId : { type :String },
    },
    { timestamps: {
        createdAt: 'createdAt',
        updatedAt :'updatedAt',
    } }
)

module.exports = new mongoose.model('view', viewSchema,'views');