require("dotenv").config();
const mongoose = require("mongoose");


class Db {
  constructor() {
    this.userName = process.env.DB_USER;
    this.passWord = process.env.DB_PASS;
    this.dbConnection();
  }
  dbConnection() {
    mongoose
      .connect(
        `mongodb+srv://${this.userName}:${this.passWord}@cluster0.o8p7a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      )
      .then(() => {
        console.log("Conexão com MongoDB realizada com sucesso!");
      })
      .catch((erro) => {
        console.log("Erro: Conexão com MongoDB não foi realizada com sucesso!");
      });
  }
}

module.exports = new Db();
