const routes = require("express").Router();
const mongoose = require("mongoose");

//models
const dataTextos = mongoose.model("dataTextos");
const dataMemorize = mongoose.model("dataMemorize");

// get routes
routes.get("/artigo", (req, res) => {
  dataTextos
    .find({})
    .then((artigo) => {
      return res.json(artigo);
    })
    .catch((erro) => {
      return res.status(400).json({
        error: true,
        message: "Nenhum artigo encontrado!",
      });
    });
});

routes.get("/memorize", (req, res) => {
  dataMemorize
    .find({})
    .then((memorize) => {
      return res.json(memorize);
    })
    .catch((erro) => {
      return res.status(400).json({
        error: true,
        message: "Nenhum artigo encontrado!",
      });
    });
});

routes.get("/artigo/:id", (req, res) => {
  dataTextos
    .findOne({ _id: req.params.id })
    .then((artigo) => {
      return res.json(artigo);
    })
    .catch((erro) => {
      return res.status(400).json({
        error: true,
        message: "Nenhum artigo encontrado!",
      });
    });
});

routes.get("/memorize/:id", (req, res) => {
  dataMemorize
    .findOne({ _id: req.params.id })
    .then((memorize) => {
      return res.json(memorize);
    })
    .catch((erro) => {
      return res.status(400).json({
        error: true,
        message: "Nenhum artigo encontrado!",
      });
    });
});

// post routes
routes.post("/artigo", (req, res) => {
  const artigo = dataTextos.create(req.body, (err) => {
    if (err)
      return res.status(400).json({
        error: true,
        message: "Error: Artigo não foi cadastrado com sucesso!",
      });

    return res.status(200).json({
      error: false,
      message: "Artigo cadastrado com sucesso!",
    });
  });
});

routes.post("/memorize", (req, res) => {
  const artigo = dataMemorize.create(req.body, (err) => {
    if (err)
      return res.status(400).json({
        error: true,
        message: "Error: memorize não foi cadastrado com sucesso!",
      });

    return res.status(200).json({
      error: false,
      message: "Artigo cadastrado com sucesso!",
    });
  });
});

// put routes
routes.put("/artigo/:id", (req, res) => {
  const artigo = dataTextos.updateOne(
    { _id: req.params.id },
    req.body,
    (err) => {
      if (err)
        return res.status(400).json({
          error: true,
          message: "Error: Artigo não foi editado com sucesso!",
        });

      return res.json({
        error: false,
        message: "Artigo editado com sucesso!",
      });
    }
  );
});

routes.put("/memorize/:id", (req, res) => {
  const artigo = dataMemorize.updateOne(
    { _id: req.params.id },
    req.body,
    (err) => {
      if (err)
        return res.status(400).json({
          error: true,
          message: "Error: Artigo não foi editado com sucesso!",
        });

      return res.json({
        error: false,
        message: "Artigo editado com sucesso!",
      });
    }
  );
});

// delete routes
routes.delete("/artigo/:id", (req, res) => {
  const artigo = dataTextos.deleteOne({ _id: req.params.id }, (err) => {
    if (err)
      return res.status(400).json({
        error: true,
        message: "Error: Artigo não foi apagado com sucesso!",
      });

    return res.json({
      error: false,
      message: "Artigo apagado com sucesso!",
    });
  });
});

routes.delete("/memorize/:id", (req, res) => {
  const artigo = dataMemorize.deleteOne({ _id: req.params.id }, (err) => {
    if (err)
      return res.status(400).json({
        error: true,
        message: "Error: Artigo não foi apagado com sucesso!",
      });

    return res.json({
      error: false,
      message: "Artigo apagado com sucesso!",
    });
  });
});

module.exports = routes;
