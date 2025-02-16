const blogDataAccess = require('../data-access/blog');
const userDataAccess = require('../data-access/user');

class blogService {
    static async createBlog({ userId, title, blog, imageUrl, category }){
        const user = await userDataAccess.findUser({userId});
        if(user && user.role === 'writer'){
            return await  blogDataAccess.createBlog({userId, title, blog, imageUrl, category}); 
        }
        else {
            throw new Error('only authors can create.')
        }
       
    }
    static async updateBlog({ userId, blogId, title, blog, imageUrl, category }){
        const blogInfo = await blogDataAccess.findBlog({ blogId });
        const user = await userDataAccess.findUser({ userId });
        if (!(user._id.toString() === blogInfo.userId.toString())) {
            throw new Error('you cannot exchange because you do not own this blog.')
        }
        if(user && user.role === 'writer'){
            if(blogInfo && blogInfo._id){
                return await blogDataAccess.updateBlog({ blogId, title, blog, imageUrl, category});
            }
        }
        else { 
           throw new Error('only authors can make changes')
        }
        
    }
    static async getBlog({ blogId }){
        return await blogDataAccess.getBlog({ blogId });
    }
    
    static async getBlogs({ title, blog, category, page, rowsPerPage }){
        if(!page){
            page = 0;
        }
        return await blogDataAccess.getBlogs({ title, blog, category, page, rowsPerPage });
    }
    static async likesCount({ blogId }){
       const count = await blogDataAccess.likesCount({ blogId });
       await blogDataAccess.updateLikeCount({blogId, count });
       return count;
    }
    static async viewsCount({ blogId }){
        const count = await blogDataAccess.viewsCount({ blogId });
        await blogDataAccess.updateViewCount({blogId, count });
        return count;
       
     }


}
module.exports = blogService;