const mongoose = require('mongoose');

const retiradaSchema = new mongoose.Schema({

});

const Retirada = mongoose.model('Retirada', retiradaSchema);

module.exports = Retirada;