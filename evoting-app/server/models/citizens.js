const mongoose = require('mongoose')
const citizensSchema = mongoose.Schema({
    'first_name': String,
    'last_name': String,
    'drivering_licencse_number': String,
    DOB: Date,
    city: { type: mongoose.Schema.Types.ObjectId, ref: 'Evote' },
    Address: {
        type: mongoose.SchemaTypes.ObjectId, ref: 'Address'


    },
    'registered_to_vote': boolean,
    'voted': boolean,
    email: String,
    'phone_number': Number,
    SSN: Number,
    'created_at': Date,
    'updated_at': Date,

})

electionSchema.pre('save', function (next) {

    let currentDate = new Date;
    this.updated_at = currentDate;
    if (!this.created_at) this.created_at = currentDate;
    console.log('date set')
    next();

})
electionSchema.pre('update', function (next) {

    let currentDate = new Date;
    this.updated_at = currentDate;

    console.log('date set')
    next();

})
modules.exports = mongoose.model('Citizens', citizensSchema);