import React from 'react';
import { Link } from 'react-router-dom'
import Button from '../../components/Button';
import '../../components/Menu/Menu.css'
import PageDefault from '../../components/PageDefault';

function Adocao() {
    return (
        <PageDefault>
            <h1>Conheça nossos amiguinhos por...</h1>
            <Button as={Link} to="/listagem/caes">Nome</Button>{' '}
            <Button as={Link} to="/listagem/racas">Raça</Button>{' '}
        </PageDefault>
    );
}

export default Adocao;