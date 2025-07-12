import { createPost } from '@/actions/action'
import React from 'react'

function page() {
  return (
    <div className='max-w-2xl mx-auto p-6 min-h-screen flex flex-col jcc'>
      <h1 className='text-3xl font-bold mb-4 text-center'>Create a new post</h1>
      <form className='space-y-4' action={createPost}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" required className='border border-gray-300 p-2 w-full' />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea id="content" name="body" required className='border border-gray-300 p-2 w-full' />
        </div>
        <button type="submit" className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600'>Create Post</button>
      </form>
    </div>
  )
}

export default page
