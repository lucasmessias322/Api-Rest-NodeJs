const mongoose = require('mongoose');

const Artigo = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    conteudo: [],
    fraseAFraseDoTexto: []
        
    
},
{
    timestamps: true,
});

mongoose.model('artigo', Artigo);