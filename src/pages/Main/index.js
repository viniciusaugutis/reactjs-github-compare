import React from 'react';
import logo from '../../assets/logo.png';
import { Container, Form } from './styles';
import './Main.scss';

import CompareList from '../../components/CompareList';

const Main = () => (
  <Container>
    <img src={logo} alt="Github compare" className="img-logo" />
    <Form>
      <input type="text" placeholder="usuário/repositório" />
      <button type="submit">OK</button>
    </Form>
    <CompareList />
  </Container>
);

export default Main;
