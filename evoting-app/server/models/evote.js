const mongoose = require('mongoose')
const electionSchema = mongoose.Schema(


    {
        '_id': Number,
        Name: String,
        state: String,
        population: Number,
        citizens: [
            { type: Number, ref: 'Citizens' }
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
                            address: {
                                type: mongoose.SchemaTypes.ObjectId, ref: 'Address'


                            },
                            party: {
                                name: String,
                                'office_phone': Number,
                                office_address: {
                                    type: mongoose.SchemaTypes.ObjectId, ref: 'Address'


                                },
                                description: String,
                                logo: String,
                                'president_name': String

                            },
                            'valid_vote_count': Number,
                            'invalid_vote_count': Number,
                            'total_vote_count': Number

                        }
                    }

                ],
                'voting_polls': [



                    {
                        'election_official': String,
                        'general_phone': Number,
                        fax: Number,

                        address: {
                            type: mongoose.SchemaTypes.ObjectId, ref: 'Address'


                        },
                    },
                ]

            }
        ],
        'created_at': Date,
        'updated_at': Date,

    }


);
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

modules.exports = mongoose.model('Evote', electionSchema);

