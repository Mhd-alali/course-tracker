'use client';
import { MoonStar,Sun } from 'lucide-react';
import { Button } from './ui/button';

export default function ThemeToggle() {
    return <Button size="icon" className='place-self-end' variant="outline" onClick={() => document.documentElement.classList.toggle('dark')}>
        <Sun size={'1.5em'} className='hidden dark:block' />
        <MoonStar size={'1.5em'} className='dark:hidden' />
    </Button>;
}