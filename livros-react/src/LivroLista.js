import React, {useState, useEffect} from "react";
import ControleLivro from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";

const controleLivros = new ControleLivro();
const controleEditora = new ControleEditora();

const LinhaLivro = props => {
    const { livro, excluir } = props;
    const nomeEditora = controleEditora.getNomeEditora;

    return (
        <tr>
            <td>
                <label>Título do livro: {livro.titulo}</label>
                <button onClick={() => excluir(livro.codigo)}>Excluir</button>
            </td>
            <td>
                <label>Autores:</label>
                <ul>
                {livro.autores.map((autor, index) => (
                    <li key={index}>{autor}</li>
                ))}
                </ul>
                Autores: {livro.titulo}</td>
            <td>Editora: {nomeEditora(livro.codEditora)}</td>
            <td></td>
        </tr>
    );
}

const LivroLista = () => {
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        setLivros(controleLivros.obterLivros());
        setCarregado(true);
    }, [carregado]);

    return (
        <table>
            <tbody>
            {livros.map(livro => (
                <LinhaLivro
                    key={livro.codigo}
                    livro={livro}
                    excluir={controleLivros.excluir}
                    getNomeEditora={controleEditora.getNomeEditora}
                />
            ))}
            </tbody>
        </table>
    )
}

export default LivroLista;