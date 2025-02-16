const mongoose = require('mongoose');
const roles = require('../constant/roles');

const UserSchema = new mongoose.Schema(
    {
      email: { type: String, required: true, unique: true },
      name: { type: String, required: true },
      surname: { type: String, required: true },
      role: { 
        type: String, 
        enum: roles.map(role => role.role),  
        required: true
      },
      password: { type: String, required: true },
      phoneNumber :{ type: String },
      isLoggedIn: { type:Boolean, default: false}
    },
    { timestamps: {
        createdAt: 'createdAt',
        updatedAt :'updatedAt',
    } }
  );
  
  const User = mongoose.model('User', UserSchema,'users');
  module.exports = User;