const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

// configuracoes de arquivo como formatos, tamanho maximo, nome etc....
module.exports = {
  dest: path.resolve(__dirname, "..", "public", "ftp"),
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const { mimetype } = file;

      switch (mimetype) {
        case "audio/mp3":
        case "audio/mpeg":
          cb(null, path.resolve(__dirname, "..", "public", "ftp"));
          break;
        default:
          break;
      }
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);

        const fileName = `${hash.toString("hex")}-${file.originalname}`;

        cb(null, fileName);
      });
    },
  }),
  limits: {
    fileSize: (1024 * 1024) ** 100,
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = ["audio/mp3", "audio/mpeg"];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type"));
    }
  },
};
