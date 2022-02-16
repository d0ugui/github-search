import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import api from '../../services/api';

import { UserInfo } from '../../components/UserInfo';
import { Repositories } from '../../components/Repositories';

import { Container } from './styles';

type UserProps = {
  user: string | undefined
}

export interface IUsernameData {
  avatar_url: string;
  bio: string;
  blog: string;
  company: string;
  email: string;
  followers: number;
  following: number;
  location: string;
  login: string;
  name: string;
  twitter_username: string;
};

export interface IRepositoriesModel {
  description: string;
  name: string;
  stargazers_count?: number;
  updated_at: string;
  html_url: string;
};

const usernameInitialValues = {
  avatar_url: '',
  bio: '',
  blog: '',
  company: '',
  email: '',
  followers: 0,
  following: 0,
  location: '',
  login: '',
  name: '',
  twitter_username: ''
};

const repoInitialValues = {
  description: '',
  name: '',
  stargazers_count: 0,
  updated_at: '',
  html_url: ''
}

export const Profile: React.FC = () => {
  const [username, setUsername] = useState<IUsernameData>(usernameInitialValues);
  const [repos, setRepos] = useState<[IRepositoriesModel]>([repoInitialValues]);
  const { user = '' } = useParams<UserProps>();

  useEffect(() => {
    async function getData() {
      const res = await api.get(user);
      setUsername(res.data);
    }

    async function getRepos() {
      const res = await api.get(`${user}/repos`);
      setRepos(res.data);
    }

    getRepos();
    getData();
  }, [])

  return (
    <Container>
      <UserInfo data={username} />
      <Repositories data={repos} />
    </Container>
  );
}