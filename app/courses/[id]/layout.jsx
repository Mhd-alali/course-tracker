import Recersive from '@/components/Recersive';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ScrollArea } from '@/components/ui/scroll-area';
import { getFolderContents } from '@/utils/actions/course.actions';

import { prisma } from '@/utils/db';
import { ChevronsUpDown } from 'lucide-react';

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
                    <Collapsible open={true} className="w-[350px] my-2">
                        <div className="flex items-center justify-between space-x-4 px-4">
                            <h2 className='text-xl font-semibold'>{course.name}</h2>
                        </div>
                        <Recersive data={content} course={course} path={course.name} />
                    </Collapsible>
                </ScrollArea>
            </aside>
            <ScrollArea className='h-[89.5vh] container'>
                {children}
            </ScrollArea>
        </div>
    </>;
}




