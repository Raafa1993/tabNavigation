'use client';
import React, { useEffect } from 'react';
import { BiArrowBack } from 'react-icons/bi';

import ButtonDefault from '@/components/Buttons/ButtonDefault';

import { useTabsStore } from '@/store/tabs';
import { ContainerDefault, HeaderPage } from '@/styles/styles';
import { usePathname, useRouter } from 'next/navigation';

import { Content } from './styles';

interface ProductsProps {
  params: {
    item: string;
    slug: string;
  };
}

export default function PreviewServiceItem({ params }: ProductsProps) {
  const router = useRouter();
  const pathname = usePathname();

  // useEffect(() => {
  //   const response = fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // }, []);

  const {
    state: { tabs },
    actions: { updateTab }
  } = useTabsStore();

  function hadnleOnGoBack() {
    const tab = tabs
      .filter((obj) => obj.to === pathname)
      .map((row) => (row.to === pathname ? { ...row, to: `${row.name}` } : row))[0];

    updateTab(tab.id, tab);
    router.push(`${tab.name}`);
  }

  console.log(params);

  return (
    <ContainerDefault>
      <HeaderPage>
        <ButtonDefault typeButton="lightWhite" onClick={hadnleOnGoBack}>
          <BiArrowBack />
          Voltar
        </ButtonDefault>

        <div className="titleHeaderPage">
          <h2>{`service > listagem > ${params.item}`}</h2>
        </div>
      </HeaderPage>

      <Content>
        <h1>{params.item}</h1>
      </Content>
    </ContainerDefault>
  );
}
