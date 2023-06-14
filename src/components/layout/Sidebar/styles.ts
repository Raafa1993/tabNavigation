'use client';
import styled, { css } from 'styled-components';

interface sidebarProps {
  modalActive?: boolean;
  active?: boolean;
}

interface ulListSub {
  isOpen: boolean;
}

export const Container = styled.div<sidebarProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 60px);
  width: 220px;
  background: var(--background-primary);
  box-shadow: 5px 0px 5px rgba(0, 0, 0, 0.03);
  padding: 6px 14px;
  transition: all 0.5s ease;
  position: relative;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  .scrolltrack {
    position: absolute;
    width: 6px;
    right: 0px;
    bottom: 2px;
    top: 2px;
    border-radius: 100px;
    background: #0046b5;
    > div {
      background: #3a6ec1 !important;
    }
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  /* gap: 12px; */
  height: 100%;
  margin-top: 20px;
`;

export const Li = styled.li<sidebarProps>`
  width: 100%;
  height: 44px;
  list-style: none;
  line-height: 44px;
  border-radius: 12px;
  position: relative;
  /* ${(props) =>
    props.active &&
    css`
      background: linear-gradient(90deg, rgba(103, 116, 236, 1) 0%, rgba(137, 236, 242, 1) 100%);
    `} */
  button {
    display: flex;
    align-items: center;
    white-space: nowrap;
    text-decoration: none;
    border-radius: 12px;
    background-color: transparent;
    svg {
      width: 24px;
      height: 24px;
    }
  }
  span {
    font-size: var(--h6-font-size);
    color: var(--primary-light);
    font-weight: ${(props) => (props.active ? 'var(--font-bold)' : 'var(--font-medium)')};
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .tooltip {
    position: absolute;
    left: 133px;
    top: 0;
    transform: translate(-50%, -50%);
    border-radius: 6px;
    height: 35px;
    width: 122px;
    line-height: 35px;
    text-align: center;
    background: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    transition: 0s;
    opacity: 0;
    pointer-events: none;
    display: none;
    z-index: 9;
  }
  svg {
    min-width: 50px;
    line-height: 50px;
    text-align: center;
    transition: all 0.5s;
    transform: ${(props) => (props.active ? 'scale(1.2)' : 'scale(1)')};
    color: var(--primary-light);
  }
  &:hover {
    svg {
      transition: all 0.5s;
      transform: scale(1.3);
    }
    .tooltip {
      top: 50%;
      transition: all 0.5s ease;
      opacity: 1;
    }
  }
`;

export const ListSub = styled.li<sidebarProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 44px;
  list-style: none;
  line-height: 44px;
  border-radius: 12px;
  position: relative;
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      background: linear-gradient(90deg, rgba(103, 116, 236, 1) 0%, rgba(137, 236, 242, 1) 100%);
    `}
  a {
    display: flex;
    align-items: center;
    white-space: nowrap;
    text-decoration: none;
    border-radius: 12px;

    svg {
      width: 25px;
      height: 25px;
    }
  }
  span {
    font-size: var(--h6-font-size);
    color: var(--primary-light);
    font-weight: ${(props) => (props.active ? 'var(--font-bold)' : 'var(--font-medium)')};
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .tooltip {
    position: absolute;
    left: 133px;
    top: 0;
    transform: translate(-50%, -50%);
    border-radius: 6px;
    height: 35px;
    width: 122px;
    line-height: 35px;
    text-align: center;
    background: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    transition: 0s;
    opacity: 0;
    pointer-events: none;
    display: none;
    z-index: 9;
  }
  svg {
    min-width: 50px;
    line-height: 50px;
    text-align: center;
    transition: all 0.5s;
    /* transform: ${(props) => (props.active ? 'scale(1.2)' : 'scale(1)')}; */
    color: var(--primary-light);
  }
  &:hover {
    svg {
      transition: all 0.5s;
      transform: scale(1.3);
    }
    .tooltip {
      top: 50%;
      transition: all 0.5s ease;
      opacity: 1;
    }
  }

  .infoSubmenu {
    display: flex;
    align-items: center;
    svg {
      width: 25px;
      height: 25px;
    }
  }
`;

export const UlSub = styled.ul<ulListSub>`
  display: flex;
  flex-direction: column;
  padding: 0 14px;
  overflow: hidden;
  height: ${(props) => (props.isOpen ? 'fit-content' : '0')};
  position: relative;

  ::before {
    content: '';
    width: 2px;
    height: 94%;
    background-color: #d0d5dd;
    position: absolute;
    left: 16%;
  }

  li {
    width: 100%;
    height: 32px;
    list-style: none;
    line-height: 32px;
    position: relative;
    margin-left: 38px;

    a {
      display: flex;
      align-items: center;
      white-space: nowrap;
      text-decoration: none;
      border-radius: 12px;

      svg {
        width: 24px;
        height: 24px;
      }
    }
    span {
      font-size: var(--h6-font-size);
      color: var(--primary-light);
      font-weight: var(--font-bold);
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      text-transform: capitalize;
    }
    .tooltip {
      position: absolute;
      left: 133px;
      top: 0;
      transform: translate(-50%, -50%);
      border-radius: 6px;
      height: 35px;
      width: 122px;
      line-height: 35px;
      text-align: center;
      background: #fff;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
      transition: 0s;
      opacity: 0;
      pointer-events: none;
      display: none;
      z-index: 9;
    }

    &:hover {
      .tooltip {
        top: 50%;
        transition: all 0.5s ease;
        opacity: 1;
      }
    }
  }
`;
