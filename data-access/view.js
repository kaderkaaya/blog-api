const viewModel = require('../models/view');

class viewDataAccess {
    static async createView({ userId, blogId }){
        return viewModel.create({
            userId,
            blogId,
        })
    }
    static async getView({userId, blogId}){
        return await viewModel.findOne({userId, blogId})
    }
    static async deleteView({ userId, blogId }){
        return await viewModel.findOneAndDelete({userId, blogId })
    }

}
module.exports = viewDataAccess;