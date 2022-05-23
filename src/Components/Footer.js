import React from 'react';
import styled from 'styled-components';

const FirstContainer = styled.section` {
  display: flex;
  flex-direction: column;
  justifycontent: center;
  margin-top: 30px;
  background-color: #212529;
  
}
`;

const SecondContainer = styled.section` {
  display: block;
  text-align: center;
  padding: 15px;
  color: #fff;
}
`;


const Footer = () => {
  return (
    <div className='fixed-bottom'>
      <FirstContainer>
        <SecondContainer>
          2022 Company 
        </SecondContainer>
      </FirstContainer>
    </div>
  )
}

export default Footer;
