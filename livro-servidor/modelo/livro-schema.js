import { banco } from './conexao.js'

const LivroSchema = new banco.Schema({
    _id: banco.Schema.Types.Objectld,
    titulo: String,
    codEditora: Number,
    resumo: String,
    autores: [String]
  });


  const LivroModel = mongoose.model("Livros", LivroSchema);
  module.exports = LivroModel;