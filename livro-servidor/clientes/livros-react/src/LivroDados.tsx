import React, { useState } from "react";
import Menu from "./components/Menu/index";
import { Livro } from "./modelo/Livro";
import { ControleLivro } from "./controle/ControleLivros";
import { useNavigate } from "react-router-dom";
import { ControleEditora } from "./controle/ControleEditora";
import Button from "./components/Button";

type Props = {
  livros: ControleLivro;
};

export default function LivroDados({ livros }: Props) {
  const [titulo, setTitulo] = useState<string>("");
  const [resumo, setResumo] = useState<string>("");
  const [editora, setEditora] = useState<number>(1);

  const navigate = useNavigate();
  const editoras = new ControleEditora();

  function cadastrarLivro(event: React.FormEvent) {
    event.preventDefault();

    const novoLivro = new Livro('', editora, titulo, resumo, []);
    livros.incluir(novoLivro);
    navigate("/catalogo");
  }

  return (
    <>
      <Menu />
      <main className="container">
        <h1>Dados Livro</h1>
        <form onSubmit={(event) => cadastrarLivro(event)}>
          
          <div className="form-group">
            <label htmlFor="titulo">Título</label>
            <input
              id="titulo"
              type="text"
              value={titulo}
              onChange={(event) => setTitulo(event.target.value)}
              className="form-control"
              placeholder="Titulo do livro"
            />
          </div>
          

          
          <div className="form-group mt-2">
            <label htmlFor="resumo">Resumo</label>
            <textarea
              id="resumo"
              value={resumo}
              onChange={(event) => setResumo(event.target.value)}
              className="form-control"
              rows={3}
            ></textarea>
          </div>
         

          <div className="form-group mt-2">
            
            <label htmlFor="editora">Editora</label>
            <select
              id="editora"
              value={editora}
              onChange={(event) => {
                setEditora(Number(event.target.value));
              }}
              className="form-select"
            >

              {editoras.getEditoras().map((editora) => {
                return (
                  <option value={Number(editora.codEditora)}>{editora.nome}</option>
                );
              })}
            </select>

          </div>
          
          <div className="form-group mt-2">
            <label htmlFor="autores">Autores (1 por linha)</label>
            <textarea id="autores" className="form-control" rows={3}></textarea>
          </div>
         

          <Button className="btn btn-primary mt-2">Salvar dados</Button>
          
        </form>
      </main>
    </>
  );
}