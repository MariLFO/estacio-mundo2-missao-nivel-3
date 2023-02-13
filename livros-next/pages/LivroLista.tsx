import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Livro from "@/classes/modelo/Livro";
import {Menu} from '../componentes/Menu'
import {LinhaLivro} from "@/componentes/LinhaLivro";

const LivroLista: NextPage = () => {
    const baseURL: string = "http://localhost:3000/api/livros";
    const [livros, setLivros] = useState<Array<Livro>>([]);
    const [carregado, setCarregado] = useState(false);

    const obterLivros = async () => {
        const resposta = await fetch(baseURL)
        return resposta.json();
    }

    const excluirLivro = async (codigo: number) => {
        const resposta = await fetch(`${baseURL}/${codigo}`, {
            method: 'DELETE'
        });
        return (await resposta.json()).ok;
    };

    useEffect(() => {
        obterLivros()
            .then(dados => {
                setLivros(dados)
                setCarregado(true)
            })
    }, [])

    const excluir = (codigo: number) => {
        excluirLivro(codigo)
            .then(() => setCarregado(false));
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Loja Next</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Menu />
            <main>
                <h1 className="title">Livros</h1>
                <table>
                    <thead>
                    <tr>
                        <th>Código</th>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Editora</th>
                        <th>Ano</th>
                        <th>Ações</th>
                    </tr>
                    </thead>
                    <tbody>
                    {livros.map(livro => (
                        <LinhaLivro
                            key={livro.codigo}
                            livro={livro}
                            excluir={excluir}
                        />
                    ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
}