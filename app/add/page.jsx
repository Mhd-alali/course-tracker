'use client';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';

import { checkIfValidPath, createCourse } from '@/utils/actions/course.actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useRouter } from 'next/navigation';

export default function AddPage() {
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('some thing went wrong');
    const [pathLoading, setPathLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            name: formData.get('name'),
            path: formData.get('path'),
            description: formData.get('description'),
        };
        await createCourse(data);
        router.push('/courses');
    };

    const handlePathChange = async (e) => {
        setPathLoading(true);
        const { data, message } = await checkIfValidPath(e.target.value);
        setError(data);
        setErrorMessage(message);
        setPathLoading(false);
    };

    return <main>
        <form onSubmit={handleSubmit} className='max-w-xl mx-auto mt-14 flex flex-col gap-6'>
            <div className="space-y-2">
                <Label htmlFor='name'>Course Name</Label>
                <Input name='name' placeholder="e.g. Epic react" />
            </div>
            <div className="space-y-2">
                <Label htmlFor='path'>
                    {error ? <span className='text-destructive'>{errorMessage}</span> : "Course Path"}
                    {pathLoading && <Loader2 className='inline ml-2 animate-spin' size={'.8rem'} />}
                </Label>
                <Input name='path' placeholder="e.g. E:/courses/react/Epic react" onChange={handlePathChange} />
            </div>
            <div className="space-y-2">
                <Label htmlFor='description'>description</Label>
                <Textarea name='description' rows={5} placeholder="a description about the course" />
            </div>

            <Button variant='outline' className='self-end'>upload</Button>
        </form>
    </main>;
}