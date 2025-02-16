const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/user');
const followersModel = require('../models/follow');
class userDataAccess {
 static async createUser({ 
    name,
    surname,
    email,
    phoneNumber,
    role,
    password,
    isLoggedIn,
   }){
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password,saltRounds);
    const user  = await UserModel.create({
    name,
    surname,
    email,
    phoneNumber,
    role,
    password:hashedPassword,
    isLoggedIn,
    })
     return user;
 }
 static async findUser({ userId }){
  const userObjectId = new mongoose.Types.ObjectId(userId);
  return  await UserModel.findOne({ _id: userObjectId}) 
 }
 static async findTargetUser({ targetUserId }){
  const userObjectId = new mongoose.Types.ObjectId(targetUserId);
  console.log('alallalalallal',userObjectId);
  return  await UserModel.findOne({ _id: userObjectId}) 
 }


 static async updateUser({ userId, name, surname, email, phoneNumber, role, password }){
   const $set = {};
   if(name){
    $set.name = name;
   }
   if(surname){
    $set.surname = surname;
   }
   if(email){
    $set.email = email;
   }
   if(phoneNumber){
    $set.phoneNumber = phoneNumber;
   }
   if(password){
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password,saltRounds);
    $set.password = hashedPassword;
   }
   if(role){
    $set.role = role;
   }
   const user = await UserModel.findOneAndUpdate({ _id: userId },{ $set });
   return { user }
 }
 static async updateLogIn({ userId }){
   await UserModel.findByIdAndUpdate(
    {
      _id : userId
    },
    {$set: { isLoggedIn:true } }
   )
 }
 static async logOut({ userId }){
 const user = await UserModel.findByIdAndUpdate(
    {_id: userId },
    {$set: { isLoggedIn:false } }
  )
  return { user };
 }
 static async getUser({ userId }){
  const userObjectId = new mongoose.Types.ObjectId(userId);
  const user =  await UserModel.findOne({  _id: userObjectId }) 
    return { user };
 }
 static async getUsers({name, surname, email, phoneNumber, role, password,page,rowsPerPage}){
    let query = {};
    if (name) query.name = name;
    if (surname) query.surname = surname;
    if (email) query.email = email;
    if (phoneNumber) query.phoneNumber = phoneNumber;
    if (role) query.role = role;
   const rowCount = page * rowsPerPage;
    const users = await UserModel.find(query)
      .limit(rowCount)
      return {users, rowCount};
 }
//  static async getUserForUsers({ userId }){
//   console.log('userId',userId)
//   if (!mongoose.Types.ObjectId.isValid(userId)) {
//     console.log("Geçersiz ObjectId:", userId);
//     return null;
// }
//   const user =  await UserModel.find({  _id: userId }).exec(); 
//   console.log('user',user)
// return user;
//  }
}
module.exports = userDataAccess;