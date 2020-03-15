const mongoose = require('mongoose')
const electionSchema = mongoose.Schema(


    {
        '_id': Number,
        'state_name': String,
        'cities': [{
            'city_name': String,
            population: Number,
            'registered_voters': [

                {
                    "_id": Number,
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

                    'voted': boolean,
                    email: String,
                    'phone_number': Number,
                    SSN: Number,
                    auth: { username: String, password: String, role: String },
                    'voting_token': String



                },

            ],

            counties_detail: [
                {
                    "_id": Number,
                    "name": String,
                    zipcodes: Array,
                    'voting_polls': [
                        {
                            'election_official': String,
                            'general_phone': Number,
                            fax: Number,

                            address: {
                                zipcode: String,
                                mail_box: String,
                                street: String,
                                house_no: String,
                                location: [string, string],
                                email: string
                            }
                            ,
                            vote_count: [{ party_id: Number, party_name: String, vote_count: Number }]
                        },
                    ]

                }
            ],


        }],



    }

);
module.exports = mongoose.model('Evote', electionSchema);

