'use client';
import ButtonDefault from '@/components/Buttons/ButtonDefault';

import { useRouter } from 'next/navigation';

import { Container, NavItems } from './styles';

export default function Dashboard() {
  const router = useRouter();
  return (
    <Container>
      <NavItems>
        <ButtonDefault onClick={() => router.push('/dashboard/1')}>item_1</ButtonDefault>
        <ButtonDefault onClick={() => router.push('/dashboard/2')}>item_2</ButtonDefault>
        <ButtonDefault onClick={() => router.push('/dashboard/3')}>item_3</ButtonDefault>
      </NavItems>
    </Container>
  );
}
