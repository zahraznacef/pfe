const UserModel = require("./UserModel");
const bcrypt = require('bcrypt')

module.exports = {

  // Add User 

  addUser : async (req, res) => {
    try {
        const salt = await new bcrypt.genSalt(10);
        const fullname = req.body.fullname;
        const phonenumber = req.body.phonenumber;
        const email = req.body.email;
        const password = await new bcrypt.hash(req.body.password, salt);
        const user = await new UserModel({
            fullname,
            phonenumber,
            email,
            password
        });
      await user.save();
      res.json(user);
    } catch (err) {
      console.log(err);
    }
  },

  // Get All Users

  getAllUsers: async (req, res) => {
    try {
      const user = await UserModel.find();
      res.json(user);
    } catch (err) {
      console.log(err);
    }
  },

  // Delete User 

  deleteUser : async (req, res) => {
    try {
      const user = await UserModel.findByIdAndDelete(req.params.id);
      res.json(user);
    } catch (err) {
      console.log(err);
    }
  },

  // Update User

  updateUser: async (req, res) => {
    try {
      const salt = await new bcrypt.genSalt(10);
      const password = await new bcrypt.hash(req.body.password, salt);
      req.body.password = password;
      const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(user);
    } catch (error) {
      console.error(error.message);
    }
  },

  // Get User 
  
  getUser : async (req, res) => {
    try {
      const user = await UserModel.findById(req.params.id);
      res.json(user);
    } catch (err) {
      console.log(err);
    }
  },
};