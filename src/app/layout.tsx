import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Fatlind Lubishtani — AI Engineer / Software Developer',
  description: 'Fatlind Lubishtani is a computer science student in Kosovo building practical AI-powered software, developer tools and backend systems.',
  icons: { icon: '/icon.svg', shortcut: '/icon.svg' },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
