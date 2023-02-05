import ControleEditora from "@/classes/controle/ControleEditora";
import {NextApiRequest, NextApiResponse} from "next";

export const controleEditora = new ControleEditora();

export default (req: NextApiRequest, res: NextApiResponse) => {
}