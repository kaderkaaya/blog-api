const likeModel = require('../models/likes');

class likeDataAccess {
    static async createLike({ userId, blogId }){
        return likeModel.create({
            userId,
            blogId,
        })
    }
    static async getLike({userId, blogId}){
        return await likeModel.findOne({userId, blogId})
    }
    static async deleteLike({ userId, blogId }){
        return await likeModel.findOneAndDelete({userId, blogId })
    }

}
module.exports = likeDataAccess;