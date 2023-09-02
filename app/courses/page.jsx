import { ActionCard } from '@/components/ActionCard';
import { prisma } from '@/utils/db';

export default async function CoursesPage() {
    const courses = await prisma.course.findMany();

    return <main className='mt-10'>
        {courses.map(course =>
            <ActionCard key={course.id} title={course.name} description={course.description} />
        )}
    </main>;
}