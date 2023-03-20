import type { NextPage } from "next";
import { useState, useEffect } from "react"
import React from "react";
import styles from '../styles/Home.module.css'
import Head from "next/head";
import { Menu } from "@/componentes/Menu";
import { ControleLivro } from "../classes/controle/ControleLivros";
import LinhaLivro from "../componentes/LinhaLivro";




const baseURL = "http://localhost:3000/api/livros"

const LivroLista: NextPage = () => {
    const [livros, setLivros] = useState<Array<ControleLivro>>([]);
    const [carregado, setCarregado] = useState<boolean>(false);
  
    const obterLivros = async () => {
      const response = await fetch(baseURL);
      const data = await response.json();
      setLivros(data);
      setCarregado(true);
    };
  
    
  
    useEffect(() => {
      obterLivros();
    }, [carregado]);
    return (
      <div className={styles.container}>
        <Head>
          <title>Lista de Livros</title>
          <meta name="description" content="Lista de livros cadastrados" />
        </Head>
  
        <Menu/>
  
        <main>
          <h1>Lista de Livros</h1>
  
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Resumo</th>
                <th>Editora</th>
                <th>Autores</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {livros.map((livro) => (
                <LinhaLivro 
                key={livro.codigo}
                  livro={livro}
                  excluir={() => {}} />
              ))}
            </tbody>
          </table>
        </main>
      </div>
    );
  };

  export default LivroLista;

