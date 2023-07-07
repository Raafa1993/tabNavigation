'use client';
import { useState } from 'react';
import { BiLogOut, BiUser } from 'react-icons/bi';

import LogoIcon from '../../../assets/logo.svg';

import Image from 'next/image';

import {
  ButtonBurguer,
  ButtonConfigProfile,
  Container,
  IconGear,
  ImageProfile,
  Logo,
  Profile,
  SectionPopUpHeader,
  SectionProfile
} from './styles';

export default function Header() {
  const [menuUser, setMenuUser] = useState(false);

  return (
    <Container>
      <SectionProfile>
        <Logo>
          {/* <Image src={LogoIcon} alt="Logo aplicação" /> */}
          LOGO
        </Logo>

        <Profile onClick={() => setMenuUser(!menuUser)}>
          <ButtonConfigProfile>
            <IconGear color="#fff" />
          </ButtonConfigProfile>
          <h2>Usuario name</h2>
          <ImageProfile onClick={() => setMenuUser(!menuUser)}>
            <BiUser size={26} color="#fff" />
          </ImageProfile>
        </Profile>
      </SectionProfile>

      <SectionPopUpHeader menuUser={menuUser}>
        <ul>
          <li>
            <button
              onClick={() => {
                setMenuUser(false);
              }}
            >
              <BiUser size={24} color="#6C757D" />
              Meu perfil
            </button>
          </li>
          <li>
            <button>
              <BiLogOut size={24} color="#6C757D" />
              Sair
            </button>
          </li>
        </ul>
      </SectionPopUpHeader>
    </Container>
  );
}
