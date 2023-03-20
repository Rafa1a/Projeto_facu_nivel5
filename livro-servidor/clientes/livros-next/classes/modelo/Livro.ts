// import React from "react";

export class Livro{
    codigo: Number;
    codEditora: Number;
    titulo: String;
    resumo: String;
    autores: String[];

    constructor(
        codigo: number,
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