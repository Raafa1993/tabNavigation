'use client';

import styled from 'styled-components';

export const ContainerDefault = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 12px;
  background-color: #f0f2f5;

  table {
    margin-top: 1.5rem;
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: #969cb3;
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;

      &.buttonsActions {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: #ffffff;
      color: #969cb3;
      border-radius: 0.25rem;

      &:first-child {
        color: #363f5f;
      }

      &.deposit {
        color: #33cc95;
      }

      &.withdraw {
        color: #e52e4d;
      }
      &.buttonsActions {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
      }
    }
  }
`;

export const HeaderPage = styled.div`
  display: flex;
  align-items: baseline;

  width: 100%;
  padding: 8px 0;
  background-color: var(--gray-100);

  .titleHeaderPage {
    display: flex;
    align-items: center;
    margin-left: 12px;
    /* border-left: 2px solid var(--gray-500); */

    h2 {
      margin-left: 12px;
      color: var(--gray-600);
    }
  }
`;
