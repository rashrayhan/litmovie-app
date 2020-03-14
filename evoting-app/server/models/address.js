const mongoose = require('mongoose')
const addressSchema = mongoose.Schema({



    zipcode: String,
    mail_box: String,
    street: String,
    house_no: String,
    location: [string, string],
    email: string

})

modules.exports = mongoose.model('Adress', addressSchema)