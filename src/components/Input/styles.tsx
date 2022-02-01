import styled, { css } from 'styled-components';

interface ErrorHandler {
  err?: boolean | undefined | string;
};

export const Container = styled.input.attrs((props: ErrorHandler) => ({
  err: props.err,
}))<ErrorHandler>`
  padding: 1rem 1.5rem;
  border: 0.2rem solid #333;
  border-radius: 0.4rem;
  width: 60%;
  color: #8190A5;
  font-size: 1.8rem;
  outline: none;
  transition: border-color 0.2s ease-in;

  ${({ err }) => err && css`
    color: #FC5050;
    border-color: #FC5050 !important;
  `}
`;
