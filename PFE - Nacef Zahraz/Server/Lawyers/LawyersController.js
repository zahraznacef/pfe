const LawyersModel  = require('./LawyersModel');

module.exports = {

  // Add Lawyer 

  addLawyer : async (req, res) => {

    try {
      const fullname = req.body.fullname;
      const image = req.body.image;
      const description = req.body.description;
      const Lawyer = await new LawyersModel({
        fullname,
        image,
        description
      });
      await Lawyer.save();
      res.json(Lawyer);
      } 
      catch (err) {
        console.log(err);
      }
  },

  // Get All Lawyers

  getAllLawyers: async (req, res) => {
    try {
      const lawyer = await LawyersModel.find();
      res.json(lawyer);
    } catch (err) {
      console.log(err);
    }
  },

  // Delete Lawyer 

  deleteLawyer : async (req, res) => {
    try {
      const lawyer = await LawyersModel.findByIdAndDelete(req.params.id);
      res.json(lawyer);
    } catch (err) {
      console.log(err);
    }
  },

  //update Lawyer

  updateLawyer: async (req, res) => {
    try {
      const lawyer = await LawyersModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(lawyer);
    } catch (error) {
      console.error(error.message);
    }
  },

  // GetLawyer 
  
  getLawyer : async (req, res) => {
    try {
      const lawyer = await LawyersModel.findById(req.params.id);
      res.json(lawyer);
    } catch (err) {
      console.log(err);
    }
  },
};