const blogService = require('../services/blog');

class blogController {
    static async createBlog(req,res,next){
        try {
            const { userId, title, blog, imageUrl, category } = req.body;
            const  blogs  = await blogService.createBlog({ userId, title, blog, imageUrl, category });            res.status(201).json({ message: 'Blog created successfully ..',blogs });
        }
        catch(e){
            return res.status(500).json({ e: `${e}` });
        }
    }
    static async updateBlog(req,res,next){
        try {
            const { userId,blogId, title, blog, imageUrl, category } = req.body;
            const { blogs }  = await blogService.updateBlog({ userId, blogId, title, blog, imageUrl, category });            res.status(201).json({ message: 'Blog updated successfully ..',blogs });
        }
        catch(e){
            return res.status(500).json({ e: `${e}` });
        }
    }
    static async getBlog(req,res){
        try {
            const { blogId } = req.query;
            const blog = await blogService.getBlog({blogId});
            res.status(200).json({ message: 'Blog got successfully ..',blog });
        } catch (e) {
            
        }
    }
    static async getBlogs(req,res){
        try {
            const { title, blog, category, page, rowsPerPage } = req.query;
            const { blogs, rowCount } = await blogService.getBlogs({ title, blog, category, page, rowsPerPage });
            res.status(200).json({ message: 'Blogs got ssuccessfully ..', blogs, rowCount });
        } catch (e) {
            return res.status(500).json({ e: `${e}` });
        }
    }
    static async likesCount(req,res){
        try {
            const { blogId } = req.query;
            const  likeCount = await blogService.likesCount({ blogId });
            res.status(200).json({ message: 'Got ssuccessfully ..', likeCount});
        } catch (e) {
            return res.status(500).json({ e: `${e}` });
        }
    }
    static async viewsCount(req,res){
        try {
            const { blogId } = req.query;
            const  viewCount = await blogService.viewsCount({ blogId });
            res.status(200).json({ message: 'Got ssuccessfully ..', viewCount});
        } catch (e) {
            return res.status(500).json({ e: `${e}` });
        }
    }
    
}
module.exports = blogController;