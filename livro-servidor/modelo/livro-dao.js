const Livro = require("./livro-schema");

const obterLivros = async () => {
  try {
    const livros = await Livro.find();
    return livros;
  } catch (error) {
    console.log(`Erro: ${error}`);
    return [];
  }
}

const incluir = async (livro) => {
    try {
      const novoLivro = await Livro.create(livro);
      console.log(`Livro adicionado com sucesso: ${novoLivro}`);
      return novoLivro;
    } catch (error) {
      console.log(`Erro: ${error}`);
      return null;
    }
  }
  
  const excluir = async (codigo) => {
    try {
      const resultado = await Livro.deleteOne({ _id: codigo });
      if (resultado.deletedCount === 0) {
        console.log('Livro não encontrado');
        return null;
      } else {
        console.log('Livro excluído com sucesso');
        return resultado;
      }
    } catch (error) {
      console.log(`Erro: ${error}`);
      return null;
    }
  };
  
  module.exports = { obterLivros, incluir, excluir };