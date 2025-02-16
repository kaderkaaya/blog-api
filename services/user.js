const userDataAccess = require('../data-access/user');
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
class userService {
     static async createUser ({ name, surname, email, phoneNumber, role, password, isLoggedIn }) {
        return userDataAccess.createUser({ name, surname, email, phoneNumber, role, password,isLoggedIn })
     }
     static async login({ userId,email,password }){
      const user  = await userDataAccess.findUser({ userId });
      if(!user){
         console.error('User not found');
         throw new Error('User not found');
      }
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (!isPasswordCorrect) {
          console.error('Incorrect password');
          throw new Error('Incorrect password');
      }
       await userDataAccess.updateLogIn({userId})
       return { user }   
     }
     static async updateUser({ userId, name, surname, email, phoneNumber, role, password }){
      const user  = await userDataAccess.findUser({ userId });
      if(user.role === 'writer' || user.role === 'reader' ){
         if(user && user._id){
            if(user.isLoggedIn === true){
               if (role === 'admin') {
                  throw new Error('Bu rolü seçemezsiniz');
               }
               const user =  await userDataAccess.updateUser({ userId, name, surname, email, phoneNumber, role, password });
               return { user }
            }
         }
      }
      
      else {
         console.error('Unsuccessfully');
         throw new Error('Unsuccessfully');
      }
     }
     static async logOut({ userId }){
       return await userDataAccess.logOut({ userId });
     }
     static async getUser({ userId }){
      return await userDataAccess.getUser({ userId });
     }
     static async getUsers({ name, surname, email, phoneNumber, role, password,page,rowsPerPage }){
      if(!page){
         page = 0;
      }
      // const user = await userDataAccess.getUserForUsers({ userId });
      // console.log('user',user)
      // let usersIds = [];
      // if(user){
      //    usersIds.push(user._id);
      // }
    return await userDataAccess.getUsers({name, surname, email, phoneNumber, role, password,page,rowsPerPage });
//     const mappedUsers = result.users.map(user => ({
//       ...user,
//   }));
//   console.log('mappedUsers',mappedUsers)
//   return {mappedUsers};
  

     }

}

module.exports = userService;