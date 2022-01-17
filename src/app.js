require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require("morgan");

// cors
const cors = require('cors');

require("./models/Memorize")
require("./models/Artigo");
require("./models/AudioTextos")
const app = express();

app.use(express.json());
// cors config
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

const userName = process.env.DB_USER;
const passWord = process.env.DB_PASS;

// dataBase conection
mongoose.connect(`mongodb+srv://${userName}:${passWord}@cluster0.o8p7a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexão com MongoDB realizada com sucesso!");
}).catch((erro) => {
    console.log("Erro: Conexão com MongoDB não foi realizada com sucesso!");
});

app.use(morgan('dev'))
app.use(require("./routes.js"))


const port = process.env.PORT || 8081
app.listen(port, () => {
    console.log("Servidor iniciado na porta: " +port);
});
