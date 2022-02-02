import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

import { Input } from '../../components/Input';
import Button from '../../components/Button';

import { FiSearch } from 'react-icons/fi';
import { Container, Content } from './styles';
import { FormGroup } from '../../components/FormGroup';

interface IErrorsProps {
  field: string;
  message: string;
}

export const Home: React.FC = () => {
  const [user, setUser] = useState<string>('');
  const [error, setError] = useState<IErrorsProps[]>([]);

  const navigate = useNavigate();

  async function handleSearch() {
    const res = await api.get(user);
    
    try {
      if (res.status === 200) {
        navigate(`/profile/${user}`);
      };
    } catch (error) {
      console.log('Usuário não existe!');
    }
  }

  function handleSubmit() {
    if (user) {
      handleSearch();
    } else {
      setError((prevState) => [
        ...prevState,
        { field: 'user', message: 'Nome é obrigatório!'},
      ]);
    }
  }

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    setUser(target.value);

    if (!target.value) {
      setError((prevState) => [
        ...prevState,
        { field: 'user', message: 'Nome é obrigatório!'},
      ]);
    } else {
      setError((prevState) => prevState.filter(
        (error) => error.field !== 'user',
      ));
    }
  }

  function getErrorMessageByFieldName(fieldName: string | undefined) {
    return error.find((error) => error.field === fieldName)?.message;
  }

  return (
    <Container>
      <h1>Search Devs!</h1>
      <Content>
       <FormGroup error={getErrorMessageByFieldName('user')}>
        <Input
          err={getErrorMessageByFieldName('user')}
          value={user}
          onChange={handleNameChange}
          placeholder="Digite o nome do usuário"
        />
       </FormGroup>
        <Button onClick={handleSubmit}>
          <FiSearch />
          Buscar
        </Button>
      </Content>
    </Container>
  );
}