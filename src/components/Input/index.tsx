import React, { InputHTMLAttributes } from 'react';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  err?: boolean | string;
}

export const Input: React.FC<InputProps> = (props) => {
    return (
      <Container {...props} />
    );
}