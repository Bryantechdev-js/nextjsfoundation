import React from 'react'

  interface PostPageProps {
  params: {
    id: string;
  };
}

async function page({ params }: PostPageProps) {
  const { id } = params;
    // You can fetch post data based on the id here if needed
     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return (
        <div className='max-w-2xl mx-auto p-6 min-h-screen'>
      <h1 className='text-3xl font-bold mb-4'>{post.title}</h1>
      <p className='text-lg'>{post.body}</p>
    </div>

  )
}

export default page
