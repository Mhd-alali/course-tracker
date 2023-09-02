import { ActionCard } from '@/components/ActionCard';
import Link from 'next/link';

export default async function Home() {

  return (
    <main className="flex items-center justify-center gap-10 h-[85vh] child:w-[230px]">
      <Link href={'/add'}>
        <ActionCard title={'Add a Course'} description={'add to the list of courses'} />
      </Link>
      <Link href={'/courses'}>
        <ActionCard title={'Courses'} description={'browser courses'} />
      </Link>
      <Link href={'/dashboard'}>
        <ActionCard title={'Dashboard'} description={'summary of your progress'} />
      </Link>
    </main>
  );
}
