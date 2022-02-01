import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 70%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-weight: 400;
  }
`;

export const Content = styled.div`
  width: 70%;
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;
