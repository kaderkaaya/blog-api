const likeDataAccess = require('../data-access/like');

class likeService {
    static async createLike({ userId, blogId }){
        const existingLike = await likeDataAccess.getLike({ blogId,userId });
        if(!existingLike){
            return await likeDataAccess.createLike({ userId, blogId });
        }
        else {
            throw new Error("you have already like it..");
            
        }
    }
    static async deleteLike({ userId, blogId }){
        const existingLike = await likeDataAccess.getLike({ blogId,userId });
        if(existingLike){
            return await likeDataAccess.deleteLike({ userId, blogId });
        }
    }

}
module.exports = likeService;