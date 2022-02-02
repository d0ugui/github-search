import styled from 'styled-components';

export const Container = styled.div`
  width: 35%;
  background: #3B4252;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: #fff;

  padding: 3rem;

  img {
    width: 100%;
    max-width: 300px;
    border-radius: 0.4rem;
  }

  button {
    padding: 1rem 5rem;
    border: none;
    border-radius: 0.4rem;
    width: fit-content;
    cursor: pointer;
    transition: 0.2s ease-in;

    &:hover {
      filter: brightness(0.7);
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: center;

  padding: 2rem;

  h3 {
    color: #8190A5;
  }

  p {
    margin: 2rem 0;
    color: #8190A5;
  }
  
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;

    li {
      color: #8190A5;
      display: flex;
      align-items: center;
      gap: 1rem;
      
      & + li {
        margin-top: 0.7rem;
      }

      svg {
        color: #fff;
      }
    }
  }
`;

export const Stats = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #8190A5;

  & > div {
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.5rem;
      color: #fff;
    }
  }

  margin-bottom: 2rem;
`;