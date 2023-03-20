import { Livro } from "../modelo/Livro";

const baseURL = "http://localhost:3030/livros"

export interface LivroMongo {
    _id: String | null,
    codEditora: number,
    titulo: String,
    resumo: String,
    autores: String[]
}

export class ControleLivro{

    async obterLivros(): Promise<Livro[]> {
        const response = await fetch(baseURL);
        const livrosJSON = await response.json();
        const livros = livrosJSON.map((livroJSON: any) => new Livro(livroJSON));
        return livros;
      }

      async excluir(codigo: string): Promise<boolean> {
        const response = await fetch(`${baseURL}/${codigo}`, {
          method: "DELETE",
        });
        const resultado = await response.json();
        return resultado.ok;
      }

      async incluir(livro: Livro): Promise<boolean> {
        const livroMongo: LivroMongo = {
            _id: null,
            codEditora: livro.codEditora,
            titulo: livro.titulo,
            resumo: livro.resumo,
            autores: livro.autores
        };
    
        const response = await fetch(baseURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(livroMongo)
        });
    
        const resultado = await response.json();
        return resultado.ok;
    }
    
      
    
} 