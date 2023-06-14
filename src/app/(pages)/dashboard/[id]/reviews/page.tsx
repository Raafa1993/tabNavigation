'use client';
import { BiArrowToLeft } from 'react-icons/bi';

import ButtonDefault from '@/components/Buttons/ButtonDefault';

import { useTabsStore } from '@/store/tabs';
import { usePathname, useRouter } from 'next/navigation';
interface ProductsProps {
  params: {
    id: string;
  };
}

export default function Reviews({ params }: ProductsProps) {
  const router = useRouter();
  const pathname = usePathname();

  const {
    state: { tabs },
    actions: { updateTab }
  } = useTabsStore();

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
  return (
    <div>
      <div className="headerPage" style={{ marginBottom: '1rem', padding: '0 20px' }}>
        <ButtonDefault onClick={handleOnNavigateBack} typeButton="light">
          <BiArrowToLeft /> Voltar
        </ButtonDefault>
      </div>
      <div>
        <h2>Reviews {params.id}</h2>
        <ButtonDefault onClick={handleOnNavigate}>item_3</ButtonDefault>
      </div>
    </div>
  );
}
