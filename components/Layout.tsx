import React from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ 
  children, 
  title = "Placemarks - Save, organize, and share your favorite places",
  description = "A beautiful list management tool for saving and sharing favorite places and places you want to go. Organize your favorite restaurants, cafes, and hidden gems."
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        {children}
      </div>
    </>
  );
} 