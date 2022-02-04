import styled from 'styled-components';

export const Container = styled.div`
  width: 65%;
  display: flex;
  background: #fff;
  overflow: hidden;
  overflow-y: scroll;
  height: 100%;

  ul {
    list-style: none;
    width: 100%;
    padding: 2rem;
  }

  li {
    border: 0.1rem solid #e3e3e3;
    width: 100%;
    padding: 1rem 2rem;
    border-radius: 0.4rem;

    & + li {
      margin-top: 1rem;
    }

    a {
      text-decoration: none;
      color: #3B4252;
    }

    h2 {
      font-size: 24px;
      color: #3B4252;
    }

    p {
      margin: 1rem 0;
    }

    div {
      display: flex;
      gap: 0.5rem;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
      }
    }
  }
`;
