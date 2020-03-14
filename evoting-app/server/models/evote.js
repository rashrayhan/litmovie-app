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
                SSN: Number

            },

        ],
        counties_detail: [
            {
                "_id": Number,
                "name": String,
                zipcodes: [Number],
                nominees: [
                    {
                        bio: {
                            '_id': Number,
                            name: String, "_id": Number, SSN: Number, picture: String,
                            Address: {
                                zipcode: String,
                                mail_box: String,
                                street: String,
                                house_no: String

                            },
                            party: {
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
                                'president_name': String

                            },
                            'vote_count': Number,


                        }
                    }

                ],
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
                    },
                ]

            }
        ],
        'created_at': Date,
        'updated_at': Date,

    }


);
modules.exports = mongoose.model('evote', electionSchema);

