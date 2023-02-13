import React from 'react';
import Link from 'next/link';

export const Menu: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link href="/index" className="navbar-brand">Livros</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link href="/LivroLista" className="nav-link">Lista</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/LivroDados" className="nav-link">Cadastro</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}