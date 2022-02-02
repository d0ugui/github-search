import React from 'react'

import { FiHome, FiHeart, FiStar, FiTwitter, FiMessageCircle, FiLink, FiMapPin, FiSun } from 'react-icons/fi';
import { Container, Content, Stats } from './styles';

export const UserInfo: React.FC = ({}) => {
    return (
      <Container>
        <img src={'https://randomuser.me/api/portraits/women/91.jpg'} alt="" />
        <Content>
          <h2>Douglas Oliveira</h2>
          <h3>@d0ugui</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, 
            hendrerit mi eu, feugiat.
          </p>

          <Stats>
            <div>
              <FiHome size={24}/>
              200 followers
            </div>
            <div>
              <FiHeart size={24}/>
              130 following
            </div>
            <div>
              <FiStar size={24}/>
              5 starts
            </div>
          </Stats>

          <ul>
            <li>
              <FiMapPin />
              organization
            </li>
            <li>
              <FiSun />
              location
            </li>
            <li>
              <FiMessageCircle />
              email
            </li>
            <li>
              <FiLink />
              www.website.com.br
            </li>
            <li>
              <FiTwitter />
              @d0ugui
            </li>
          </ul>
        </Content>

        <button>Voltar</button>
      </Container>
    );
}