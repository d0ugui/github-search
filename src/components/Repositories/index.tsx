import React from 'react';
import { IRepositoriesModel } from '../../pages/Profile';

import { FiStar } from 'react-icons/fi';
import { Container } from './styles';

interface RepositoriesProps {
  data: object;
}


export const Repositories: React.FC<RepositoriesProps> = ({ data }) => {
  return (
    <Container>
      <div>
        <ul>
          {data?.map((repo) => (
            <li key={repo.name}>
              <a href={repo.html_url} target="_blank">
                <h2>{repo.name}</h2>
                <p>{repo.description}</p>
                <div>
                  {repo.stargazers_count === 0 ? '' : (
                    <span>
                    <FiStar />
                    {repo.stargazers_count}
                  </span>
                  )}
                  <span>
                    <strong>• Updated </strong>
                    {repo.updated_at}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}