import type { NextPage } from "next";
import React from "react";
import { useState } from "react";
import { Menu } from "@/componentes/Menu";
import { Livro } from "../classes/modelo/Livro";
import { ControleEditora } from "../classes/controle/ControleEditora";
import { ControleLivro } from "@/classes/controle/ControleLivros";
import { Editora } from "../classes/modelo/Editora";
import { useRouter } from "next/router";
import Button from "@/componentes/Button";
import Head from "next/head";



const LivroDados: NextPage = () => {
  const [titulo, setTitulo] = useState<string>("");
  const [resumo, setResumo] = useState<string>("");
  const [editora, setEditora] = useState<number>(1);

  const router = useRouter();
  const editoras = new ControleEditora();
  const livros = new ControleLivro()


  function incluir(event: React.FormEvent) {
    event.preventDefault();

    const novoLivro = new Livro(1, editora, titulo, resumo, []);
    livros.incluir(novoLivro);
    router.push("./LivroLista");
  }

  return (
    <>
      
        
  
        <Menu/>
      <main className="container">
        <h1>Dados Livro</h1>
        <form onSubmit={(event) => incluir(event)}>
          
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

export default LivroDados;