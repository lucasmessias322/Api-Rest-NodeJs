const mongoose = require('mongoose');

const dataTextos = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    textos: [],
    fraseAFraseDoTexto: []
},
{
    timestamps: true,
});

mongoose.model('dataTextos', dataTextos);
