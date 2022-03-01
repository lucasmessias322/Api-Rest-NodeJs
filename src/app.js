const express = require("express");
const serveIndex = require("serve-index");

const morgan = require("morgan");
const path = require("path");
const cors = require("cors");

// Models
require("./models/Memorize");
require("./models/Artigo");

// Db connection
require("./dbConection");
const indexRoutes = require("./routes");

const app = express();

// cors config
(function corsconfig() {
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    app.use(cors());
    next();
  });
})();

// Ftp server
(function ftpServer() {
  app.use(
    "/ftp",
    express.static(path.resolve(__dirname, "public", "ftp")),
    serveIndex(path.resolve(__dirname, "public", "ftp"), { icons: true })
  );
})();
app.use(express.json());
app.use(indexRoutes);
app.use(morgan("dev"));

// class App {
//   constructor() {
//     this.app =
//     this.corsconfig();
//     this.routes();
//     this.jsonFormat();
//     this.ftpServer();
//     this.morganConectDev();
//   }
//   corsconfig() {
//     this.app.use((req, res, next) => {
//       res.header("Access-Control-Allow-Origin", "*");
//       res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
//       this.app.use(cors());
//       next();
//     });
//   }
//   routes() {
//     this.app.use(indexRoutes);
//   }
//   jsonFormat() {
//     this.app.use(express.json());
//   }
//   ftpServer() {
//     this.app.use(
//       "/ftp",
//       express.static(path.resolve(__dirname, "public", "ftp")),
//       serveIndex(path.resolve(__dirname, "public", "ftp"), { icons: true })
//     );
//   }
//   morganConectDev() {
//     this.app.use(morgan("dev"));
//   }
// }

module.exports = app;
