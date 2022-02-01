import React from 'react'
import { FiSearch } from 'react-icons/fi';
import Button from '../../components/Button';

import Input from '../../components/Input';

import { Container, Content } from './styles';

export const Home: React.FC = () => {
  return (
    <Container>
      <h1>Search Devs!</h1>
      <Content>
        <Input placeholder="Digite o nome do usuário"/>
        <Button>
          <FiSearch />
          Buscar
        </Button>
      </Content>
    </Container>
  );
}