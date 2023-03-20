import { Livro } from "@/classes/modelo/Livro";
import { ControleLivro } from "@/classes/controle/ControleLivros";
import { ControleEditora } from "@/classes/controle/ControleEditora";
import Button from "../Button";




interface PropsLinhaLivro {
  livro: Livro;
  acervo: ControleLivro
  loading: React.Dispatch<React.SetStateAction<boolean>>;
};





const LinhaLivro = ({ acervo, livro, loading }: PropsLinhaLivro) => {
  const editora = new ControleEditora();

  const handleExcluirClick = () => {
    acervo.excluir(Number(livro.codigo));
    loading(true);
  };


  return (
    <>
      <tr>
        <th scope="row">
          <p>{livro.titulo}</p>

          <Button 
            type="button"
            className="btn btn-danger btn-sm" 
            onClick={handleExcluirClick}
          >
            Excluir
          </Button>


          </th>
        <td>{livro.resumo}</td>
        <td>
          {editora.getNomeEditora(livro.codEditora).map((nomeEditora) => {
            return nomeEditora.nome;
          })}
        </td>
        <td>
          <ul>
            {livro.autores.map((nome) => {
              return <li key="{nome.id}">{nome}</li>;
            })}
          </ul>
        </td>
      </tr>
    </>
  );
};




export default LinhaLivro



