import { NextApiRequest, NextApiResponse } from 'next';
import { controleLivro } from '.'



// eslint-disable-next-line import/no-anonymous-default-export
export default  (requisicao: NextApiRequest, resposta: NextApiResponse) => {
    const { codigo } = requisicao.query;
    resposta.status(200).json(controleLivro.obterLivros());
};