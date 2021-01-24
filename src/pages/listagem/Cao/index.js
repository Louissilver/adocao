import React, { useEffect, useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import getAll from '../../../repositories/caes';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from '../../../components/Button';
import styled from 'styled-components';

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;
function ListaCao() {
    const [dadosIniciais, setDadosIniciais] = useState([]);

    useEffect(() => {
        getAll()
            .then((caes) => {
                setDadosIniciais(caes);
                console.log(caes);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <PageDefault>
            {dadosIniciais.length === 0 && (<div style={{ textAlign: 'center', padding: '30vh', fontSize: '2rem' }}>Carregando...</div>)}
            <Row>
                {dadosIniciais.map((cao, indice) => {
                    for (let i = 0; i < dadosIniciais.length; i += 1) {
                        if (!(typeof dadosIniciais[indice] === 'undefined')) {
                            return (
                                <Card style={{ width: '24rem', margin: '10px', background: 'whitesmoke' }}>
                                    <Card.Img
                                        variant="top"
                                        src={cao.imagem}
                                        style={{
                                            width: '100%',
                                            height: '170px',
                                            objectFit: 'cover',
                                            objectPosition: '0 20%'
                                        }} />
                                    <Card.Body>
                                        <Card.Title>Nome: {cao.nome}</Card.Title>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item style={{ background: 'whitesmoke' }}>Raça: {cao.raca}</ListGroup.Item>
                                        <ListGroup.Item style={{ background: 'whitesmoke' }}>Idade: {cao.idade} | Sexo: {cao.sexo} | Porte: {cao.porte}</ListGroup.Item>
                                        <ListGroup.Item style={{ background: 'whitesmoke' }}>Casinha: {cao.casinha}</ListGroup.Item>
                                        <ListGroup.Item style={{ background: 'whitesmoke' }}>Adotado: {cao.adotado.toString()}</ListGroup.Item>
                                    </ListGroup>
                                    <Card.Body style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Button>Saiba mais</Button>
                                        <Button>Adotar</Button>
                                    </Card.Body>
                                </Card>
                            );
                        }
                    }
                })}
            </Row>
        </ PageDefault>
    );
}

export default ListaCao;