import React from 'react';
import PageDefault from '../../components/PageDefault';
import styled from 'styled-components'
import CachorroAdotado from '../../assets/cachorroadotado.png'
import Button from '../../components/Button';

const Article = styled.article`
    background-color: whitesmoke;
    color: black;
    padding: 5%;
    margin: 2.5%;
    border-radius: 15px;
`;

const Carousel = styled.article`
    width: 100%;
    align-items: center;
    text-align: center;
    background-color: #007bff;
    color: #ffcb05;
    text-shadow: 3px 3px #3c5aa6;
    img{
        object-fit: cover;
        width: 100%;
        height: 495px;
        padding: 0;
    }
`;

function Home() {
    return (
        <PageDefault>
            <Carousel>
                <img src={CachorroAdotado} alt="Cachorro sendo abraçado por humano" />
                <h1>Adote um cachorro!</h1>
            </Carousel>
            <Article>
                <h2>Sobre a AdoCão</h2>
                <p>Somos...</p>
            </Article>
            <Article>
                <h2>Por que adotar?</h2>
                <p>Ao adotar...</p>
                <Button>Conheça quem já foi adotado</Button>
            </Article>
            <Article>
                <h2>Contato</h2>
                <p>Para entrar em contato...</p>
            </Article>
        </PageDefault>
    );
}

export default Home;