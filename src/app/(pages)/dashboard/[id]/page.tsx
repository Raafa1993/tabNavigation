'use client';

import { BiShow } from 'react-icons/bi';

import ButtonDefault from '@/components/Buttons/ButtonDefault';

import { useTabsStore } from '@/store/tabs';
import { ContainerDefault } from '@/styles/styles';
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

  function handleOnNavigate(id: number) {
    const tab = tabs
      .filter((obj) => obj.to === pathname)
      .map((row) =>
        row.to === pathname ? { ...row, to: `/dashboard/${params.id}/reviews` } : row
      )[0];

    updateTab(tab.id, tab);
    router.push(`/dashboard/${params.id}/reviews`);
  }

  const dataTable = [
    {
      id: 1,
      title: 'item_1',
      type: 'Development',
      category: 'Front-End',
      amount: 'R$: 2500,00',
      createdAt: '14/06/2023'
    },
    {
      id: 2,
      title: 'item_2',
      type: 'Development',
      category: 'Front-End',
      amount: 'R$: 2500,00',
      createdAt: '14/06/2023'
    },
    {
      id: 3,
      title: 'item_3',
      type: 'Development',
      category: 'Front-End',
      amount: 'R$: 2500,00',
      createdAt: '14/06/2023'
    },
    {
      id: 4,
      title: 'item_4',
      type: 'Development',
      category: 'Front-End',
      amount: 'R$: 2500,00',
      createdAt: '14/06/2023'
    }
  ];

  return (
    <ContainerDefault>
      <h1>Reviews</h1>

      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
            <th className="buttonsActions">--</th>
          </tr>
        </thead>

        <tbody>
          {dataTable.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>{transaction.amount}</td>
              <td>{transaction.category}</td>
              <td>{transaction.createdAt}</td>
              <td className="buttonsActions">
                <ButtonDefault typeButton="dark" onClick={() => handleOnNavigate(transaction.id)}>
                  <BiShow />
                </ButtonDefault>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <ButtonDefault onClick={handleOnNavigate}>item_{params.id}</ButtonDefault> */}
    </ContainerDefault>
  );
}
