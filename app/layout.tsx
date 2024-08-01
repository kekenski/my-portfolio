// /app/layout.tsx
import React from 'react';
import NavBar from './components/NavBar';
import './globals.css'; // Import global styles

export const metadata = {
  title: 'My Next.js App',
  description: 'Generated by Next.js',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
  