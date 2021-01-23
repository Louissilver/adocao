import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/Logo.png';
import Button from 'react-bootstrap/Button';

function Menu() {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">
                <img
                    src={logo}
                    alt="Logo AdoCão"
                    width="100"
                    height="45"
                    className="d-inline-block align-top" />
            </Navbar.Brand>
            <Nav className="ml-auto">
                <Button variant="outline-warning" size="sm"><Nav.Link href="/">Home</Nav.Link></Button>
                <Button variant="outline-warning" size="sm"><Nav.Link href="/listagem/caes">Cães</Nav.Link></Button>
                <Button variant="outline-warning" size="sm"><Nav.Link href="/listagem/racas">Raças</Nav.Link></Button>
                <Button variant="outline-warning" size="sm"><Nav.Link href="/cadastro/raca">Nova raça</Nav.Link></Button>
                <Button variant="outline-warning" size="sm"><Nav.Link href="/cadastro/cao">Novo cão</Nav.Link></Button>
            </Nav>
        </Navbar>
    );
}

export default Menu;