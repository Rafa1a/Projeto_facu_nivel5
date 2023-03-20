import { NextApiRequest, NextApiResponse } from 'next';
import { ControleEditora } from "../../../classes/controle/ControleEditora";

export const controleEditora = new ControleEditora() 

export default async function handle(requisicao: NextApiRequest, resposta: NextApiResponse) {
    try {
      if (requisicao.method !== 'GET') {
        resposta.status(405).send('Método não permitido');
        return;
      }
  
      const editoras = await controleEditora.getEditoras();
      resposta.status(200).json(editoras);
    } catch (error) {
      console.error(error);
      resposta.status(500).send('Ocorreu um erro interno no servidor');
    }
  }