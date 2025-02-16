const bookmarkDataAccess = require('../data-access/bookmark');

class bookmarkService {
    static async createBookmark({ userId, blogId }){
        const existingBookmark = await bookmarkDataAccess.getBookmark({ blogId,userId });
        if(!existingBookmark){
            return await bookmarkDataAccess.createBookmark({ userId, blogId });
        }
        else {
            throw new Error("you have already bookmark it..");
            
        }
    }
    static async deleteBookmark({ userId, blogId }){
        const existingBookmark = await bookmarkDataAccess.getBookmark({ blogId,userId });
        if(existingBookmark){
            return await bookmarkDataAccess.deleteBookmark({ userId, blogId });
        }
    }

}
module.exports = bookmarkService;