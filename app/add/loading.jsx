import { Loader } from 'lucide-react';

export default async function Loading() {
    return (
        <div className="flex items-center justify-center w-full h-[85vh]">
            <Loader className='animate-spin' size={'3rem'} />
        </div>
    );
}