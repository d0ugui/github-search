import React, { useState } from 'react'
import api from '../../services/api';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { FiSearch } from 'react-icons/fi';
import { Container, Content } from './styles';

export const Home: React.FC = () => {
  const [user, setUser] = useState<string>('');

  async function handleSearch() {
    const res = await api.get(user);
    console.log(res.data);
  }

  return (
    <Container>
      <h1>Search Devs!</h1>
      <Content>
        <Input 
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Digite o nome do usuário"
        />
        <Button onClick={handleSearch}>
          <FiSearch />
          Buscar
        </Button>
      </Content>
    </Container>
  );
}