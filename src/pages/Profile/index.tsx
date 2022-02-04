import React from 'react'
import { useParams } from 'react-router-dom';

import { UserInfo } from '../../components/UserInfo';
import { Repositories } from '../../components/Repositories';

import { Container } from './styles';

export const Profile: React.FC = () => {
  const { user } = useParams();

  return (
    <Container>
      <UserInfo name={user} />
      <Repositories name={user} />
    </Container>
  );
}