const mongoose = require('mongoose')
const citizensSchema = mongoose.Schema({
    'first_name': String,
    'last_name': String,
    'drivering_licencse_number': String,
    DOB: Date,
    Address: {
        zipcode: String,
        mail_box: String,
        street: String,
        house_no: String


    },
    'registered_to_vote': boolean,
    'voted': boolean,
    email: String,
    'phone_number': Number,
    SSN: Number,
    'created_at': Date,
    'updated_at': Date,

})
modules.exports = mongoose.model('citizens', citizensSchema);