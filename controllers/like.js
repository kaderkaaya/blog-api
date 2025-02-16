const likeService = require('../services/like');

class likeController {
 static async createLike(req, res){
   try {
    const { userId, blogId } = req.body;
    const like = await likeService.createLike({ userId, blogId });
    res.status(201).json({ message: 'like created successfully ..', like });
   } catch (e) {
    return res.status(500).json({ e: `${e}` });
   }
 }
 static async deleteLike(req, res){
    try {
     const { userId, blogId } = req.body;
     const like = await likeService.deleteLike({ userId, blogId });
     res.status(201).json({ message: 'like deleted successfully ..' });
    } catch (e) {
     return res.status(500).json({ e: `${e}` });
    }
  }
}
module.exports = likeController;