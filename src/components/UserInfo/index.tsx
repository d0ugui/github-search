import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IUsernameData } from '../../pages/Profile';

import { FiHome, FiHeart, FiStar, FiTwitter, FiMessageCircle, FiLink, FiMapPin, FiSun } from 'react-icons/fi';
import { Container, Content, Stats } from './styles';

interface UserInfoData {
  data: IUsernameData;
}

export const UserInfo: React.FC<UserInfoData> = ({ data }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <img src={data.avatar_url} alt="" />
      <Content>
        <h2>{data.name}</h2>
        <h3>@{data.login}</h3>
        <p>
          {data.bio}
        </p>

        <Stats>
          <div>
            <FiHome size={24}/>
            {data.followers} followers
          </div>
          <div>
            <FiHeart size={24}/>
            {data.following} following
          </div>
          <div>
            <FiStar size={24}/>
            5 starts
          </div>
        </Stats>

        <ul>
          <li>
            <FiMapPin />
            {data.company || '--'}
          </li>
          <li>
            <FiSun />
            {data.location || '--'}
          </li>
          <li>
            <FiMessageCircle />
            {data.email|| '--'}
          </li>
          <li>
            <FiLink />
            {data.blog || '--'}
          </li>
          <li>
            <FiTwitter />
            {data.twitter_username || '--'}
          </li>
        </ul>
      </Content>

      <button onClick={() => navigate('/')}>Voltar</button>
    </Container>
  );
}