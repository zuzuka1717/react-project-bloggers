import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 1.5em;
    font-family: Arial;
    text-align: center;
    color: #008080;
    margin: 8px;
    padding: 0 3px;
`;

const Text = styled.p`
    font-size: 1em;
    font-family: Arial;
    text-align: center;
    color: grey;
    margin: 5px;
    padding: 3px;
`

const Header = () => {
  return (
    <div>
      <Title>
      <h1>Top bloggers</h1>
      </Title>
      <Text>
      <p>The best specialists, 
average experience in the profession - 10 years
      </p>
      </Text>
    </div>
  )
}

export default Header;