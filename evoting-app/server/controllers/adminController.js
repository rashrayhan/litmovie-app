const State_info = require('../models/State_model')

module.exports.getCities = async function (req, res) {

    res.send('this is working');
}

module.exports.addState = async function (req, res) {
    const state = await new State_info(

        {


        }

    ).save()


}

module.exports.addPolls = async function (req, res) {


    const state = await new State_info(

        {


        }

    ).save()


}