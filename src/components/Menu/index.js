import React from 'react';
import Logo from '../../assets/Logo.png';
import { Link } from 'react-router-dom'
import Button from '../Button';
import './Menu.css'

function Menu() {
    return (
        <nav className="Menu">
            <div>
                <Link to="/">
                    <img className="Logo" src={Logo} alt="Logo da AdoCão" />
                </Link>
            </div>
            <div>
                <Button as={Link} to="/listagem">Quero adotar</Button>{' '}
                <Button as={Link} to="/cadastro">Cadastrar um cãozinho</Button>{' '}
            </div>
        </nav>
    );
}

export default Menu;