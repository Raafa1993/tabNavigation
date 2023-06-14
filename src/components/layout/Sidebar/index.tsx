'use client';
import { Fragment } from 'react';

import Link from 'next/link';

import { Container, Ul, Li } from './styles';
import SubMenu from './subMenu';

interface IMenu {
  to: string;
  icon?: any;
  name: string;
  submenu?: string[];
}

interface ISiderbar {
  menus: IMenu[];
  path: string;
  handleOnClick: (name: string) => void;
}

export default function Sidebar({ menus, path, handleOnClick }: ISiderbar) {
  return (
    <Container>
      <Ul>
        {menus.map((row, key) => (
          <Fragment key={key}>
            {row.submenu ? (
              <SubMenu data={row} />
            ) : (
              <>
                <Li active={path === row.to ? true : false}>
                  {/* <Link
                    prefetch={false}
                    href={row.to}
                    onClick={row.onClick ? row.onClick : () => null}
                  >
                    <row.icon />
                    <span>{row.name}</span>
                  </Link>
                  <span className="tooltip">{row.name}</span> */}
                  <button onClick={() => handleOnClick(row.to)}>
                    <row.icon />
                    <span>{row.name}</span>
                  </button>
                </Li>
              </>
            )}
          </Fragment>
        ))}
      </Ul>
    </Container>
  );
}
