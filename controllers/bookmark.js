const bookmarkService = require('../services/bookmark');

class bookmarkController {
 static async createBookmark(req, res){
   try {
    const { userId, blogId } = req.body;
    const bookmark = await bookmarkService.createBookmark({ userId, blogId });
    res.status(201).json({ message: 'bookmark created successfully ..', bookmark });
   } catch (e) {
    return res.status(500).json({ e: `${e}` });
   }
 }
 static async deleteBookmark(req, res){
    try {
     const { userId, blogId } = req.body;
     const bookmark = await bookmarkService.deleteBookmark({ userId, blogId });
     res.status(201).json({ message: 'bookmark deleted successfully ..' });
    } catch (e) {
     return res.status(500).json({ e: `${e}` });
    }
  }
}
module.exports = bookmarkController;