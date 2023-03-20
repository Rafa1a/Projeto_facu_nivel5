// import React from "react";

export class Livro{
    codigo: String;
    codEditora: Number;
    titulo: String;
    resumo: String;
    autores: String[];

    constructor(
        codigo: string,
        codEditora: number,
        titulo: string,
        resumo: string,
        autores: string[]
      ) {
        this.codigo = codigo;
        this.codEditora = codEditora;
        this.titulo = titulo;
        this.resumo = resumo;
        this.autores = autores;
      }

}