import styled from 'styled-components';

export default styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 20%;

  color: #fff;
  font-size: 2.2rem;
  font-weight: 300;

  border: none;
  border-radius: 0.4rem;
  padding: 10px;
  background-color:#3B4252;

  cursor: pointer;
  transition: 0.4s ease-in;

  svg {
    margin-right: 0.7rem;
  }


  &:hover {
    filter: brightness(0.8);
  }
`;
