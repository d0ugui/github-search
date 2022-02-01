import React, { ReactNode } from 'react'

import { Container } from './styles';

interface FormGroupProps {
  children: ReactNode;
  error?: boolean | string;
}

export const FormGroup: React.FC<FormGroupProps> = ({ children, error }) => {
    return (
      <Container>
        {children}
        {error && <small>{error}</small>}
      </Container>
    );
}