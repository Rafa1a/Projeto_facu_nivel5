import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Editora } from '../editora';
import { Livro } from '../livro';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent {

public editoras: Array<Editora> = []
public livros: Array<Livro> = []

constructor (
  private servEditora: ControleEditoraService,
  private servLivros: ControleLivrosService,
  private router: Router
  ){}

  ngOnInit(): void {

    this.servEditora.getEditoras().subscribe((editoras) => {
      this.editoras = editoras
    }
    )

    this.servLivros.obterLivros().subscribe((livros)=>{
      this.livros = livros;
    })



    }

    excluir = (codigo: number) => {
      this.servLivros.excluir(codigo);
      this.servLivros.obterLivros().subscribe((livros)=>{
        this.livros = livros;
    })}

    obterNome = (codEditora: number) => {
      return this.servEditora.getNomeEditora(codEditora).map((nomeEditora) => {
        return nomeEditora.nome;
      })};

    }

  
