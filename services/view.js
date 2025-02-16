const viewDataAccess = require('../data-access/view');

class viewService {
    static async createView({ userId, blogId }){
        const existingView = await viewDataAccess.getView({ blogId,userId });
        if(!existingView){
            return await viewDataAccess.createView({ userId, blogId });
        }
        else {
            throw new Error("you have already view it..");
            
        }
    }
    static async deleteView({ userId, blogId }){
        const existingView = await viewDataAccess.getView({ blogId,userId });
        if(existingView){
            return await viewDataAccess.deleteView({ userId, blogId });
        }
    }

}
module.exports = viewService;