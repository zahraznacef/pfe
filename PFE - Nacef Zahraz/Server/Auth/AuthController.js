const USER = require('../User/UserModel')
const bcrypt = require('bcrypt')
 const jwt = require('jsonwebtoken');
module.exports = {
  register : (req,res) =>{
    USER.findOne({ email : req.body.email }).exec( async (error, user) =>{
       
       if (user) // check if user in params
       {
          return res.status(400).json({
             error : "User already registered",
          })
       }
       
       const fullname = req.body.fullname;
       
       const email = req.body.email;
       
       const phonenumber = req.body.phonenumber;
       
       const salt = await new bcrypt.genSalt(10); // prepare to crypt
       
       const password = await new bcrypt.hash(req.body.password, salt); // crypt password

       const _user = new USER({
          fullname,
          email,
          phonenumber,
          password
       });

       _user.save( (error, user) =>{
          if (error)
          {
             return res.status(400).json({
                message : "Something went wrong"
             })
          }

          if (user)
          {
             return res.status(201).json({
                message : "User created successfully !",
                user
             });
          }
       });
    });
 },

 signin : (req,res) =>{
    USER.findOne({ email : req.body.email }).exec( async (error,user) =>{
       
       if (error)
       {
          return res.status(400).json({ error });
       }

       if (user)
       {
          const verPass = await new bcrypt.compare(req.body.password,user.password);

          if (verPass) 
          {
             const token = jwt.sign(
                {
                _id : user._id,
                role : user.role,
                fullname : user.fullname,
                phonenumber : user.phonenumber,
                email : user.email
                },
                "MEARNSECRET", {expiresIn: "1h"}
             )
             res.status(200).json({
                token
             });
          }
          else
          {
             return res.status(400).json({
                message : "Invalid password !"
             })
          }
       }
    })
 }
}