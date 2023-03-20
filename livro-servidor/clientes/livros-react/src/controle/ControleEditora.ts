import { Editora } from "../modelo/Editora";

export  class ControleEditora {
  editoras: Editora[] = [
    {
      codEditora: 1,
      nome: "Intrínseca",
    },
    {
      codEditora: 2,
      nome: "Record",
    },
    {
      codEditora: 3,
      nome: "Rocco",
    },
    {
      codEditora: 4,
      nome: "Globo",
    },
    {
      codEditora: 5,
      nome: "Darkside",
    },
    {
      codEditora: 6,
      nome: "Principis",
    },
    {
      codEditora: 7,
      nome: "Antofágica",
    },
    {
      codEditora: 8,
      nome: "Companhia da Letras",
    },
    {
      codEditora: 9,
      nome: "Suma",
    },
    {
      codEditora: 10,
      nome: "Casa do Código",
    },
  ];

  getEditoras() {
    return this.editoras;
  }

  getNomeEditora(codigoEditora: Number) {
    return this.editoras.filter((editora) => {
      return editora.codEditora === codigoEditora;
    });
  }
}
