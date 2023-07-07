'use client';

import { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Li, ListSub, UlSub } from './styles';

export default function SubMenu({ data }: any) {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <>
      <ListSub onClick={() => setSubMenuOpen(!subMenuOpen)}>
        <div className="infoSubmenu">
          <data.icon />
          <span>{data.name}</span>
        </div>

        <BiChevronDown />
      </ListSub>

      <UlSub isOpen={subMenuOpen}>
        {data.submenu.map((row: any) => (
          <li key={row}>
            <Link prefetch={false} href={`${data.to}/${row}`}>
              <span>{row}</span>
            </Link>
          </li>
        ))}
      </UlSub>
    </>
  );
}
