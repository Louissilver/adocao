import styled from 'styled-components';

const Button = styled.button`
    color: #3c5aa6;
    border: 3px solid #2a75bb;
    background: #FFCC03;
    box-sizing: border-box;
    cursor: pointer;
    padding: 8px 16px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
&:hover,
&:focus {
    opacity: .4;
    text-decoration: none;
}
`;

export default Button;