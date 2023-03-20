let express = require("express");
let router = express.Router();

const LivroControler = require("../modelo/livro-dao");

router.get("/livro", LivroControler.obterLivros);
router.get("/livro/:id", LivroControler.mostrarLivro);
router.post("/livro", LivroControler.incluir);
router.delete("/livro/:id", LivroControler.excluir);

module.exports = router;
