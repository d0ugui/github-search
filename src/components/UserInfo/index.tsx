import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

import { FiHome, FiHeart, FiStar, FiTwitter, FiMessageCircle, FiLink, FiMapPin, FiSun } from 'react-icons/fi';
import { Container, Content, Stats } from './styles';

type UserInfoProps = {
  name?: string;
}

type IUsernameData = {
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
}

export const UserInfo: React.FC<UserInfoProps> = ({ name = '' }) => {
  const [username, setUsername] = useState<IUsernameData>(usernameInitialValues);
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      const res = await api.get(name);
      setUsername(res.data);
    }

    getData();
  }, []);

  return (
    <Container>
      <img src={username.avatar_url} alt="" />
      <Content>
        <h2>{username.name}</h2>
        <h3>@{username.login}</h3>
        <p>
          {username.bio}
        </p>

        <Stats>
          <div>
            <FiHome size={24}/>
            {username.followers} followers
          </div>
          <div>
            <FiHeart size={24}/>
            {username.following} following
          </div>
          <div>
            <FiStar size={24}/>
            5 starts
          </div>
        </Stats>

        <ul>
          <li>
            <FiMapPin />
            {username.company || '--'}
          </li>
          <li>
            <FiSun />
            {username.location || '--'}
          </li>
          <li>
            <FiMessageCircle />
            {username.email|| '--'}
          </li>
          <li>
            <FiLink />
            {username.blog || '--'}
          </li>
          <li>
            <FiTwitter />
            {username.twitter_username || '--'}
          </li>
        </ul>
      </Content>

      <button onClick={() => navigate('/')}>Voltar</button>
    </Container>
  );
}