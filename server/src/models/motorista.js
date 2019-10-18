const mongoose = require('mongoose');

const motoristaSchema = new mongoose.Schema({
    
});

const Motorista = mongoose.model('Motorista', motoristaSchema);

module.exports = Motorista;