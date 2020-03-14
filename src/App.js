import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/global';

const Title = styled.h1`
  color: #f00;
  font-size: 32px;
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Title>Hello World</Title>
    </div>
  );
}

export default App;
