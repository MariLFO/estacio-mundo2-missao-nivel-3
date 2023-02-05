import ControleEditora from "@/classes/controle/ControleEditora";
import {NextApiRequest, NextApiResponse} from "next";

export const controleEditora = new ControleEditora();

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        const editoras = controleEditora.getEditoras();
        return res.status(200).json(editoras);
    }
}