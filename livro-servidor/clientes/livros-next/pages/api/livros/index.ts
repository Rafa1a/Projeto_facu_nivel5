import { NextApiRequest, NextApiResponse } from 'next';
import { ControleLivro } from "../../../classes/controle/ControleLivros";
import { Livro } from "../../../classes/modelo/Livro";

export const controleLivro = new ControleLivro() 

export default async function handle(requisicao: NextApiRequest, resposta: NextApiResponse) {
  const requestMethod = requisicao.method;


  if(requestMethod === 'POST'){
    const novoLivro = new Livro(
      livro.codigo,
      livro.codEditora,
      livro.titulo,
      livro.resumo,
      livro.autores
    );
    controleLivro.incluir(novoLivro);
    resposta.status(200).json(controleLivro.obterLivros());
  } 
  else if(requestMethod === 'DELETE'){
    controleLivro.excluir(Number(codigo));
    resposta.status(200).json(controleLivro.obterLivros());
  }
  else {
    resposta.status(200).json(controleLivro.obterLivros());
  }

 
  }