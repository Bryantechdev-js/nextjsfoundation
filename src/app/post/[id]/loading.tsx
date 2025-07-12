// app/post/[id]/loading.tsx
import React from 'react';

export default function LoadingPost() {
  return (
    <div className='max-w-2xl mx-auto p-6 animate-pulse min-h-screen'>
      <div className='h-8 bg-gray-300 rounded w-3/4 mb-4'></div>
      <div className='space-y-3'>
        <div className='h-4 bg-gray-300 rounded w-full'></div>
        <div className='h-4 bg-gray-300 rounded w-11/12'></div>
        <div className='h-4 bg-gray-300 rounded w-10/12'></div>
      </div>
    </div>
  );
}
// This component can be used to show a loading state while the post data is being fetched.
// It uses a simple skeleton loading effect to indicate that content is being loaded.