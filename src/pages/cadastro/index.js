import React from 'react';
import { Link } from 'react-router-dom'
import Button from '../../components/Button';
import '../../components/Menu/Menu.css'
import PageDefault from '../../components/PageDefault';

function Cadastro() {
    return (
        <PageDefault>
            <Button as={Link} to="/cadastro/cao">Cadastrar um cãozinho</Button>{' '}
            <Button as={Link} to="/cadastro/raca">Cadastrar uma raça</Button>{' '}
        </PageDefault>
    );
}

export default Cadastro;