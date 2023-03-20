import { NextApiRequest, NextApiResponse } from 'next';
import { ControleEditora } from "../../../classes/controle/ControleEditora";

const controleEditora = new ControleEditora() 

// eslint-disable-next-line import/no-anonymous-default-export
export default  (requisicao: NextApiRequest, resposta: NextApiResponse) => {
    const { codEditora } = requisicao.query;
    resposta.status(200).json(controleEditora.getNomeEditora(Number(codEditora)));
};