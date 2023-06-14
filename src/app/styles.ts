'use client';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Main = styled.div`
  display: flex;
  height: calc(100vh - 60px);
  background-color: var(--gray-25);

  .contentMain {
    display: flex;
    flex-direction: column;

    height: 100%;
    width: 100%;

    .sidebarItems {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 8px 1rem;
    }
  }
`;
