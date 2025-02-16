const mongoose = require('mongoose');
const blogModel = require('../models/blog');
const likeModel = require('../models/likes');
const viewModel = require('../models/view');

class blogDataAccess {
    static async createBlog({userId, title, blog, imageUrl, category}){
        const blogs = await blogModel.create({
            userId,
            title, 
            blog,
            imageUrl,
            category
        });
        return blogs;
    }
    static async findBlog({ blogId }){
        const blogObjectId =  new mongoose.Types.ObjectId(blogId);
        return await blogModel.findOne({_id: blogObjectId });
    }
    static async updateBlog({ blogId, title, blog, imageUrl, category }){
      const $set = {};
      if(title){
        $set.title = title;
      }
      if(blog){
        $set.blog = blog;
      }
      if(imageUrl){
        $set.imageUrl = imageUrl;
      }
      if(title){
        $set.category = category;
      }
      const blogs = await blogModel.findOneAndUpdate({ _id: blogId },{ $set });
      return { blogs };

    }
    static async getBlog({ blogId }){
        return await blogModel.findOne({_id:blogId});
    }

    static async getBlogs({ title, blog, category, page, rowsPerPage }){
        let query = {};
        if (title) query.title = title;
        if (blog) query.blog = blog;
        if (category) query.category = category;
        const rowCount = page * rowsPerPage;
        const blogs = await blogModel.find(query)
          .limit(rowCount)
          return { blogs, rowCount };
    }

    static async likesCount({ blogId }){
        return await likeModel.countDocuments({ blogId })
    }

    static async viewsCount({ blogId }){
        return await viewModel.countDocuments({ blogId })
    }
    static async updateLikeCount({ blogId, count}){
         const blog =  await this.getBlog({blogId});
         console.log('blog',blog)
         return blogModel.findOneAndUpdate(
            { _id: blogId }, 
            { $set: { likeCount: count } }, 
            { new: true } 
        );
    }
    static async updateViewCount({ blogId, count}){
        const blog =  await this.getBlog({ blogId });
        console.log('blog',blog)
        return blogModel.findOneAndUpdate(
           { _id: blogId }, 
           { $set: { views: count } }, 
           { new: true } 
       );
   }
    
}
module.exports = blogDataAccess;