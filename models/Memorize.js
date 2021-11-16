const mongoose = require('mongoose');

const dataMemorize = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    items: []  
},
{
    timestamps: true,
});

mongoose.model('dataMemorize', dataMemorize);
