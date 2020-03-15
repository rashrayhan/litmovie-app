const mongoose = require('mongoose')
const electionSchema = mongoose.Schema(


    {
        '_id': Number,
        Name: String,
        state: String,
        population: Number,
        citizens: [

            {
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
                auth: { username: String, password: String, role: String },
                'voting_token': String



            },

        ],
        parties:
            [{
                name: String,
                'office_phone': Number,
                office_address: {
                    zipcode: String,
                    mail_box: String,
                    street: String,
                    house_no: String

                },
                description: String,
                logo: String,
                'party_rep': String,
                nominee:
                {
                    ssn: String,

                    'vote_count': Number,
                    'picUrl': String


                }
            }],
        'created_at': Date,
        'updated_at': Date,
        // counties_detail: [
        //     {
        //         "_id": Number,
        //         "name": String,
        //         zipcodes: [Number],




        //         'voting_polls': [



        //             {
        //                 'election_official': String,
        //                 'general_phone': Number,
        //                 fax: Number,

        //                 address: {
        //                     zipcode: String,
        //                     mail_box: String,
        //                     street: String,
        //                     house_no: String,
        //                     location: [string, string],
        //                     email: string
        //                 }
        //             },
        //         ]

        //     }
        // ],


    }


);
modules.exports = mongoose.model('Evote', electionSchema);

