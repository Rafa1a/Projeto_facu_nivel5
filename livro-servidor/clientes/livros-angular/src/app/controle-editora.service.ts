import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  obterEditoras() {
    throw new Error('Method not implemented.');
  }

  editora: Editora[] = [
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


  getEditoras(): Observable<Editora[]> {
    return of(this.editora);
  }

  getNomeEditora(codigoEditora: number) {
    return this.editora.filter((editora) => {
      return editora.codEditora === codigoEditora;


    });
  }

  constructor(){}
}
