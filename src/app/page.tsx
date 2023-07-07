'use client';
import { usePathname } from 'next/navigation';

export default function Home() {
  const pathname = usePathname();

  return (
    <div>
      <h1>Hello word</h1>
      <span>{pathname}</span>
    </div>
  );
}
