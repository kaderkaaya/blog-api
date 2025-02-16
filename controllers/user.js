const userService = require('../services/user')

class userController {
static async createUser(req, res, next) {
    try {
      const { name, surname, email, phoneNumber, role, password,isLoggedIn } = req.body;
      const  user  = await userService.createUser({ name, surname, email,phoneNumber, role, password,isLoggedIn})
      res.status(201).json({ message: 'User created successfully ! ', user });
    }
   catch (e) {
    next (e);
  }
}
static async login(req,res,next){
  try {
    const { userId,email, password } = req.body;
    const { user } = await userService.login({ email, userId, password });
    res.status(200).json({message:'You have successfully logged in ! ', user })
  } catch (e) {
    return res.status(500).json({ e: `${e}` });
    next(e);
  }
}
static async updateUser(req,res,next){
    try {
      const { userId, name, surname, email, phoneNumber, role, password } = req.body;
      const  { user }  = await userService.updateUser({userId, name, surname, email, phoneNumber, role, password});
      res.status(201).json({ message: 'User updated successfully ! ', user });
    }catch (e) {
      return res.status(500).json({ e: `${e}` })
      next(e);
    }
  }
  static async logOut(req,res,next){
    try {
      const { userId } = req.body;
      const { user } = await userService.logOut({ userId });
      res.status(200).json({message:'User logged successfully !', user})
    } catch (e) {
      return res.status(500).json({ e: `${e}` });
      next(e);
    }
  }
  static async getUser(req,res,next){
    try {
      const { userId } = req.query;
      const { user } = await userService.getUser({ userId });
      res.status(200).json({message:'User informations got successfully !', user })
    } catch (e) {
      return res.status(500).json({ e: `${e}` });
    }
  }
  static async getUsers(req,res,next){
  try {
    const {name, surname, email, phoneNumber, role, password,page,rowsPerPage } = req.query;
    const { users, rowCount } = await userService.getUsers({ name, surname, email, phoneNumber, role, password,page,rowsPerPage});
    res.status(200).json({message:'Users informations got successfully !', users,rowCount })
  } catch (e) {
    return res.status(500).json({ e: `${e}` });
  }
  }
}
module.exports = userController;