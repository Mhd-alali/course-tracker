'use client';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronsUpDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Recersive({ data, course, path }) {
    const isObject = (obj) => typeof obj === 'object' && obj !== null;
    const [isOpen, setIsOpen] = useState(true);
    const entries = Object.entries(data);
    return (
        <>
            {entries.map(([key, value]) => {
                if (isObject(value)) {
                    const Value = () => {
                        const [isOpen, setIsOpen] = useState(false);

                        return <Collapsible key={key} onOpenChange={setIsOpen} open={isOpen} className="w-[350px] ">
                            <div className="flex items-center justify-between space-x-4 px-4">
                                <h2 >{key}</h2>
                                <CollapsibleTrigger asChild>
                                    <Button variant="ghost" size="sm" className="w-9 p-0">
                                        <ChevronsUpDown className="h-4 w-4" />
                                    </Button>
                                </CollapsibleTrigger>
                            </div>
                            <CollapsibleContent className='mt-2'>
                                <Recersive data={value} course={course} path={`${path}/${key}`}/>
                            </CollapsibleContent>
                        </Collapsible>;
                    };
                    return <Value key={key} />;
                }
                else {
                    return <CollapsibleContent key={value}>
                        <Button variant='link' className='text-left ml-10'>
                            <Link href={`/courses/${course.id}/${path}/${value}`}>
                                {value}
                            </Link>
                        </Button>
                    </CollapsibleContent>;
                };

            })}
        </>
    );

};