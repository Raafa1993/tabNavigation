'use client';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px);

  background-color: var(--gray-100);
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 0.785rem 1rem;
`;
