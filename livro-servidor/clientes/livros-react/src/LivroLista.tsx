import React, { useState, useEffect } from "react";
import { ControleLivro}   from "./controle/ControleLivros";
import { ControleEditora }  from "./controle/ControleEditora";
import { Livro } from "./modelo/Livro";

import Button from "./components/Button";
import Menu from "./components/Menu";
import axios from 'axios';


type PropsLinhaLivro = {
  livro: Livro;
  acervo: ControleLivro;
  carregando: () => void;
};

type Props = {
  livros: ControleLivro;
};



const LinhaLivro = ({ acervo, livro, carregando }: PropsLinhaLivro) => {
  const editora = new ControleEditora();

  const handleExcluirClick = () => {
    acervo.excluir(String(livro.codigo))
      .then(() => {
        setCarregado(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };




  return (
    <>
      <tr>
        <th scope="row">
          <p>{livro.titulo}</p>

          <Button 
            type="button"
            className="btn btn-danger btn-sm" 
            onClick={handleExcluirClick}
          >
            Excluir
          </Button>

 


        </th>
        <td>{livro.resumo}</td>
        <td>
          {editora.getNomeEditora(livro.codEditora).map((nomeEditora) => {
            return nomeEditora.nome;
          })}
        </td>
        <td>
          <ul>
            {livro.autores.map((nome) => {
              return <li>{nome}</li>;
            })}
          </ul>
        </td>
      </tr>
    </>
  );
};

export function LivroLista({ livros }: Props) {
  const [listaLivros, setlistaLivros] = useState<Livro[]>(livros.obterLivros());
  const [carregando, setCarregando] = useState<boolean>(false);

  useEffect(() => {
    setCarregando(true);
    axios.get(livros.obterLivros())
      .then(response => {
        setlistaLivros(response.data);
        setCarregando(false);
      })
      .catch(error => console.error(error));
  }, [carregando]);

  return (
    <>
      <Menu />
      <main className="container">
        <h1>Catalogo de Livros</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Título</th>
              <th scope="col">Resumo</th>
              <th scope="col">Editora</th>
              <th scope="col">Autores</th>
            </tr>
          </thead>
          <tbody>
            {listaLivros.map((livro) => {
              return (
                <LinhaLivro
                  key={String(livro.codigo)}
                  livro={livro}
                  carregando={setCarregando}
                  acervo={livros}
                />
              );
            })}
          </tbody>
        </table>
      </main>
    </>
  );
}