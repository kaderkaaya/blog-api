const viewService = require('../services/view');

class viewController {
 static async createView(req, res){
   try {
    const { userId, blogId } = req.body;
    const view = await viewService.createView({ userId, blogId });
    res.status(201).json({ message: 'view created successfully ..', view });
   } catch (e) {
    return res.status(500).json({ e: `${e}` });
   }
 }
 static async deleteView(req, res){
    try {
     const { userId, blogId } = req.body;
     const view = await viewService.deleteView({ userId, blogId });
     res.status(201).json({ message: 'view deleted successfully ..' });
    } catch (e) {
     return res.status(500).json({ e: `${e}` });
    }
  }
}
module.exports = viewController;