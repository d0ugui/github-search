import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { FiStar, FiAlertCircle } from 'react-icons/fi';
import { Container } from './styles';

interface IRepositoriesProps {
  name?: string;
}

interface IRepositoriesModel {
  description: string;
  name: string;
  stargazers_count?: number;
  updated_at: string;
  html_url: string;
} 


export const Repositories: React.FC<IRepositoriesProps> = ({ name }) => {
  const [repos, setRepos] = useState<[IRepositoriesModel]>();

  useEffect(() => {
    async function getRepos() {
      const res = await api.get(`${name}/repos`);
      setRepos(res.data);
    }

    getRepos();
  }, [])

  return (
    <Container>
      <div>
        <ul>
          {repos?.map((repositorie) => (
            <li key={repositorie.name}>
              <a href={repositorie.html_url} target="_blank">
                <h2>{repositorie.name}</h2>
                <p>{repositorie.description}</p>
                <div>
                  {repositorie.stargazers_count === 0 ? '' : (
                    <span>
                    <FiStar />
                    {repositorie.stargazers_count}
                  </span>
                  )}
                  <span>
                    <strong>• Updated </strong>
                    {repositorie.updated_at}
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