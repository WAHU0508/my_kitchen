'use client';
import React from 'react';

export default function Header() {

    return (
        <header className='w-full flex items-center justify-center'>
            {/* Header for large and medium screens */}
            <div className='hidden w-full md:flex md:flex-row bg-black/60 text-black px-4 py-2'>Header</div>
        </header>
    );
}
