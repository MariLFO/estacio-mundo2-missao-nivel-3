import React, { Component } from "react";
import ControleEditora from "./controle/ControleLivros";
import ControleLivro from "./controle/ControleLivros";

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();
class Props {
    livro;
    excluir;
}

class LinhaLivro extends Component {
    render() {
        const { livro, excluir } = this.props;
        return (
            <tr>
                <td>Código do livro: {livro.codigo}</td>
                <td>Título do livro: {livro.titulo}</td>
                <td><button>Excluir</button></td>
            </tr>
        );
    }
}

export default LinhaLivro;