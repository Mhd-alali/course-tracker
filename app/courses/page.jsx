import { ActionCard } from '@/components/ActionCard';
import { prisma } from '@/utils/db';
import Link from 'next/link';

export default async function CoursesPage() {
    const courses = await prisma.course.findMany();

    return <main className='mt-10 container'>
        {courses.map(course =>
            <Link key={course.id} href={`/courses/${course.id}`}>
                <ActionCard title={course.name} description={course.description} />
            </Link>
        )}
    </main>;
}