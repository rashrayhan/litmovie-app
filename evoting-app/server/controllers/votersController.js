//will contain voters controller
const Evote = require('../models/Evote');


module.exports.registerVoter = async function (req, res) {
  try {
    const state_city = await Evote.findOne
    res.status(200).json(lecture);
  } catch (error) {
      res.status(500).json({message: error.message});
  }
}

