//will contain voters controller
<<<<<<< HEAD
const Evote = require('../models/state_model')
=======
const State_model = require('../models/state_model');
const mongoose = require('mongoose');
>>>>>>> 21bea16bf6c6efaf45b55d19c0dc52241caf1d6f

//register voter control
module.exports.registerVoter = async function (req, res) {
  const state = req.body.state_name;
  const city = req.body.city_name;

  try {
    const { registered_voters } = await State_model.findOne({
      state_name: state,
      city_name: city
    }, {projection: {
      registered_voters: 1
    }});

    await State_model.updateOne({
      state_name: state,
      city_name: city
    },{
      $push: {
        registered_voters: {
          'first_name': req.body.first_name,
          'last_name': req.body.last_name,
          'driving_license_number': req.body.driving_license_number,
          DOB: req.body.DOB,
          Address: {
            zipcode: req.body.zipcode,
            mail_box: req.body.mail_box,
            street: req.body.street,
            house_no: req.body.house_no,
            'voted': 0,
            email: req.body.email,
            'phone_number': req.body.phone_number,
            SSN: req.body.SSN,
            'voting_token': req.body.voting_token
          }

        }
      }
    });

    res.status(200).json({result: 'success'});
  } catch (error) {
      res.status(500).json({message: error.message});
  }
}

