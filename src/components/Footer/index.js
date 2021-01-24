import React from 'react';
import styled from 'styled-components';

const FooterBase = styled.footer`
  background-color: #007bff;
  color: white;
  border-top: 2px solid whitesmoke;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  text-align: center;
  width:100%;
  a{
      color: white;
  }
  a:hover{
      color: #ffcb05;
  }
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

function Footer() {
    return (
        <FooterBase>
            <p>&copy; 2021 | By <a href="https://github.com/Louissilver">@Louissilver</a></p>
        </FooterBase>
    );
}

export default Footer;