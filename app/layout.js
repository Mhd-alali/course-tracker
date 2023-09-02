import { Button } from '@/components/ui/button';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`dark ${inter.className}`}>
        <nav className='py-3 border-b'>
          <ul className='flex gap-4 container'>
            <li>
              <Button variant="link">Courses</Button>
            </li>
            <li>
              <Button variant="link">Dashboard</Button>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}