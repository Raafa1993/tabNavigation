'use client';
import { BiArrowToLeft } from 'react-icons/bi';

import ButtonDefault from '@/components/Buttons/ButtonDefault';

import { useTabsStore } from '@/store/tabs';
import { ContainerDefault, HeaderPage } from '@/styles/styles';
import { usePathname, useRouter } from 'next/navigation';
interface ProductsProps {
  params: {
    id: string;
  };
}

export default function Reviews({ params }: ProductsProps) {
  const router = useRouter();
  const pathname = usePathname();

  console.log('REVIEW', params.id);

  const {
    state: { tabs },
    actions: { updateTab }
  } = useTabsStore();

  const tabItem = tabs.filter((tab) => tab.to === pathname)[0];

  function handleOnNavigateBack() {
    const tab = tabs
      .filter((obj) => obj.to === pathname)
      .map((row) => (row.to === pathname ? { ...row, to: `/dashboard/${params.id}` } : row))[0];

    updateTab(tab.id, tab);
    router.push(`/dashboard/${params.id}`);
  }

  function handleOnNavigate() {
    const tab = tabs
      .filter((obj) => obj.to === pathname)
      .map((row) =>
        row.to === pathname ? { ...row, to: `/dashboard/${params.id}/reviews/${params.id}` } : row
      )[0];

    updateTab(tab.id, tab);
    router.push(`/dashboard/${params.id}/reviews/${params.id}`);
  }

  // window.addEventListener('popstate', function (event) {
  //   // O usuário navegou para trás, faça algo aqui
  //   console.log('CLICKOU para tras', event);
  //   handleOnNavigateBack();

  //   // window.location.href = '/';
  // });

  return (
    <ContainerDefault>
      <HeaderPage>
        <ButtonDefault onClick={handleOnNavigateBack} typeButton="light">
          <BiArrowToLeft /> Voltar
        </ButtonDefault>
      </HeaderPage>
      <div>
        <h2>Reviews {tabItem.name}</h2>
        <ButtonDefault onClick={handleOnNavigate}>item_3</ButtonDefault>
      </div>
    </ContainerDefault>
  );
}
