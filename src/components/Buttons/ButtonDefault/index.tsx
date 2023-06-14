'use client';

import React, { ButtonHTMLAttributes } from 'react';

import Spinner from '../Spinner';
import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  isOutline?: boolean;
  isDashed?: boolean;
  typeButton?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'lightWhite'
    | 'dark';
  sizeButton?: 'small' | 'big';
}

export default function ButtonDefault({
  loading,
  children,
  isOutline,
  sizeButton,
  isDashed,
  typeButton,
  ...rest
}: ButtonProps) {
  return (
    <Container
      typeButton={typeButton}
      isOutline={isOutline}
      isDashed={isDashed}
      sizeButton={sizeButton}
      disabled={loading}
      type="button"
      {...rest}
    >
      {loading ? <Spinner /> : children}
    </Container>
  );
}
