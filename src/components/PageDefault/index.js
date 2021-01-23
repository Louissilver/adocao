import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components'

const Main = styled.main`
    background-color: white;
    color: black;
    flex: 1;
    padding-left: 2%;
    padding-right: 2%;
    height: 73vh;
`;

function PageDefault({ children }) {
    return (
        <>
            <Menu />
            <Main>
                {children}
            </Main>
            <Footer />
        </>
    );
}

export default PageDefault;