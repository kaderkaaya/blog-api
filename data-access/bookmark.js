const bookmarkModel = require('../models/bookmark');

class bookmarkDataAccess {
    static async createBookmark({ userId, blogId }){
        return bookmarkModel.create({
            userId,
            blogId,
        })
    }
    static async getBookmark({userId, blogId}){
        return await bookmarkModel.findOne({userId, blogId})
    }
    static async deleteBookmark({ userId, blogId }){
        return await bookmarkModel.findOneAndDelete({userId, blogId })
    }

}
module.exports = bookmarkDataAccess;