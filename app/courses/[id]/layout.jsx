import Recersive from '@/components/Recersive';
import { ScrollArea } from '@/components/ui/scroll-area';
import { getFolderContents } from '@/utils/actions/course.actions';

import { prisma } from '@/utils/db';

export default async function Layout({ children, params }) {
    const course = await prisma.course.findUnique({
        where: {
            id: +params.id
        }
    });
    const content = getFolderContents(course.path);

    return <>
        <div className="flex">
            <aside className='border-r '>
                <ScrollArea className='h-[89.5vh]'>
                    <Recersive data={content} />
                </ScrollArea>
            </aside>
            <ScrollArea className='h-[89.5vh] container'>
                {children}
            </ScrollArea>
        </div>
    </>;
}




