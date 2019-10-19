const mongoose = require('mongoose');

const clinicSchema = new mongoose.Schema({
    cnpj: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        zipCode: {
            type: Number
        },
        street: {
            type: String,
            trim: true
        },
        number: {
            type: Number
        },
        neighborhood: {
            type: String,
            trim: true
        },
        city: {
            type: String,
            trim: true
        },
        state: {
            type: String,
            maxlength: 2
        }
    },
    phone: {
        type: Number
    },
    contact: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});

const Clinic = mongoose.model('Clinic', clinicSchema);

module.exports = Clinic;