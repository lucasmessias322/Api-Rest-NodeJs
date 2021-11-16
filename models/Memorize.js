const mongoose = require('mongoose');

const dataMemorize = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    items: [{
        "questao": String,
        "resposta": String
      }]  
},
{
    timestamps: true,
});

mongoose.model('dataMemorize', dataMemorize);
