import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LivroLista } from "./LivroLista";
import LivroDados from "./LivroDados";
import { ControleLivro}  from "./controle/ControleLivros";

const livros = new ControleLivro();

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="catalogo" element={<LivroLista livros={livros} />} />
          <Route path="novo" element={<LivroDados livros={livros} />} />
          <Route path="/" element={<LivroLista livros={livros} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}