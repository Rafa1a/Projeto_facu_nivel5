import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Livro } from './livro'

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {

  livro: Livro[] = [
    {
      codigo: 1,
      codEditora: 10,
      titulo: "HTML5 Canvas e JavaScript",
      resumo: "O mercado dos jogos está cada vez mais forte e sendo adotado nops navegadores, com os jogos feitos em HTML5 através da nova especifdicação de Canvas. Com conhecimento HTML5 e um pouco de JavaScript, é possível criar jogos extremamente poderosos e com um alto grau de entretenimento. Os tão conhecidos jogos viciantes",
      autores: ["Éderson Cássio"]
  },
  {
      codigo: 2,
      codEditora: 5,
      titulo: "Serial killers made in Brasil",
      resumo: "Em Made in Brazil, Casoy relata sete casos de serial killers brasileiros, três dos quais ela entrevistou pessoalmente: Marcelo Costa de Andrade, o vampiro de Niterói, um dos casos e depoimentos mais chocantes do currículo da autora; Francisco Costa Rocha, o Chico Picadinho; e Pedro Rodrigues Filho, o Pedrinho Matador",
      autores: ["Ilana Casoy"]
  },
  {
      codigo: 3,
      codEditora: 4,
      titulo: "E não sobrou nenhum",
      resumo: "Uma ilha misteriosa, um poema infantil, dez soldadinhos de porcelana e muito suspense são os ingredientes com que Agatha Christie constrói seu romance mais importante. Na ilha do Soldado, antiga propriedade de um milionário norte-americano, dez pessoas sem nenhuma ligação aparente são confrontadas por uma voz misteriosa com fatos marcantes de seus passados.",
      autores: ["Agatha Christie"]
  },
  {
      codigo: 4,
      codEditora: 4,
      titulo: "O livro da literatura",
      resumo: "Escrito em linguagem simples e acessível, O livro da literatura é ricamente composto por infográficos, ilustrações e textos atraentes. A obra é fundamental e envolvente tanto para curiosos no assunto quanto para os estudantes mais entusiasmados. O título faz parte da coleção best-seller As grandes ideias de todos os tempos que tem mais de 20 títulos publicados pela Globo Livros e assuntos tão diversos como psicologia, mitologia, filosofia, mitologia, sociologia e história, entre tantos outros.",
      autores: ["Camile Mendrot", "Luiza Leal da Cunha", "Ana Paula Corradini"]
  },
  {
      codigo: 5,
      codEditora: 3,
      titulo: "Perto do coração selvagem",
      resumo: "Perto do coração Selvagem foi a estreia literária de Clarice Lispector, quando a autora tinha apenas 22 anos de idade, e causou grande impacto, suscitando artigos elogiosos de críticos e escritores. Esse foi um ano fundamental na vida de Clarice, além de publicar o primeiro livro, ela obteve a cidadania brasileira, casou-se e diplomou-se em Direito. A leitura é caleidoscópica.",
      autores: ["Clarice Lispector"]
  },
  {
      codigo: 6,
      codEditora: 6,
      titulo: "A Divina Comédia",
      resumo: "A Divina Comédia é um poema clássico da literatura italiana e mundial com características épica e teológica, escrito por Dante Alighieri no século XIV período renascentista e dividido em três partes: o Inferno, o Purgatório e o Paraíso. São cem cantos protagonizados pelo próprio Dante em companhia do poeta romano Virgílio , que percorreu uma jornada espiritual pelos três reinos além-túmulo.",
      autores: ["Dante Alighieri"]
  },
  {
      codigo: 7,
      codEditora: 7,
      titulo: "Memórias póstumas de Brás Cubas",
      resumo: "Publicado em 1881, escrito com a pena da galhofa e a tinta da melancolia, Memórias Póstumas de Brás Cubas é, possivelmente, o mais importante romance brasileiro de todos os tempos. Inovador, irônico, rebelde, toca no que há de mais profundo no ser humano. Mas vale avisar: há na alma desse livro, por mais risonho que pareça, um sentimento amargo e áspero.",
      autores: ["Machado de Assis"]
  },
  {
      codigo: 8,
      codEditora: 1,
      titulo: "Mindhunter: O primeiro caçador de serial killers americano",
      resumo: "Durante as mais de duas décadas em que atuou no FBI, o agente especial John Douglas tornou-se uma figura lendária. Em uma época em que a expressão serial killer, assassino em série, nem existia, Douglas foi um oficial exemplar na aplicação da lei e na perseguição aos mais conhecidos e sádicos homicidas de nosso tempo. Como Jack Crawford em O Silêncio dos Inocentes, Douglas confrontou, entrevistou e estudou dezenas de serial killers e assassinos, incluindo Charles Manson, Ted Bundy e Ed Gein.",
      autores: ["John Douglas", "Mark Olshaker"]
  },
  {
      codigo: 9,
      codEditora: 1,
      titulo: "Arte importa: Porque sua imaginação pode mudar o mundo",
      resumo: "'O mundo sempre se ilumina quando você faz algo que não existia antes', diz Neil Gaiman na epígrafe de Arte importa, uma reunião de quatro textos breves e inspiradores do escritor sobre o fazer artístico. Com artes de Chris Riddell, ilustrador renomado e parceiro de longa data de Gaiman, o livro explora como ler, imaginar e criar livremente podem ser elementos revolucionários capazes de mudar o mundo.",
      autores: ["Neil Gaiman"]
  }
  ]

  obterLivros(): Observable<Livro[]> {
    return of(this.livro);
  }

  incluir(novolivro: Livro): void {
    const novoCodigo = this.livro.reduce(
      (maxCodigo, livro) => Math.max(maxCodigo, Number(livro.codigo)),
      0) + 1;

      const livroAdicionado = {
        codigo: novoCodigo,
        codEditora: Number(novolivro.codEditora),
        titulo: novolivro.titulo,
        resumo: novolivro.resumo,
        autores: novolivro.autores
      };

      this.livro.push(livroAdicionado);
    }


    excluir(codigoLivro: number) {
      const index = this.livro.findIndex((livro) => livro.codigo === codigoLivro);
      if (index !== -1) {
        this.livro.splice(index, 1);
      }
    }
  constructor(){}

}
