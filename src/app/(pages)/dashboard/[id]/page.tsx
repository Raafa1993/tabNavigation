'use client';
import ButtonDefault from '@/components/Buttons/ButtonDefault';

import { useTabsStore } from '@/store/tabs';
import { usePathname, useRouter } from 'next/navigation';

interface ProductsProps {
  params: {
    id: string;
  };
}

export default function DashboardId({ params }: ProductsProps) {
  const router = useRouter();
  const pathname = usePathname();

  const {
    state: { tabs },
    actions: { updateTab }
  } = useTabsStore();

  function handleOnNavigate() {
    const tab = tabs
      .filter((obj) => obj.to === pathname)
      .map((row) =>
        row.to === pathname ? { ...row, to: `/dashboard/${params.id}/reviews` } : row
      )[0];

    updateTab(tab.id, tab);
    router.push(`/dashboard/${params.id}/reviews`);
  }

  return (
    <div>
      <input type="text" />
      <p>Reviews</p>
      <ButtonDefault onClick={handleOnNavigate}>item_{params.id}</ButtonDefault>
    </div>
  );
}
