import React from 'react'

import { UserInfo } from '../../components/UserInfo';

import { Container } from './styles';

export const Profile: React.FC = ({}) => {
    return (
      <Container>
        <UserInfo />
      </Container>
    );
}