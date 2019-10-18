const mongoose = require('mongoose');

const clinicaSchema = new mongoose.Schema({
    
});

const Clinica = mongoose.model('Clinica', clinicaSchema);

module.exports = Clinica;