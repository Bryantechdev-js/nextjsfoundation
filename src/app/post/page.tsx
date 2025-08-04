

// import Link from 'next/dist/client/link'
import Link from 'next/link'
import { Console, error, log } from 'node:console'
import { console } from 'node:inspector'
import React from 'react'
import { prisma } from '../lib/prisma'
import { get } from 'node:http'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'
// import { redirect } from 'next/dist/server/api-utils'


async function page() {
    // checking if the user is authenticated
    
    const {isAuthenticated} = await getKindeServerSession()

    if(!(await isAuthenticated)){
      redirect("/")
    }
    const post = await prisma.post.findMany()

  return (
    <div className='max-w-full min-h-screen flex flex-col items-center  p-5'>
      
      <h1 className="text-3xl capitalize font-bold mb-4 text-center my-5">Blog Post Title</h1>
      <p className="text-[16px]">This is the content of the blog post.</p>
      {post.length == 0 ? "no post avalable yet create" :post.map(item => (
        <Link href={`/post/${item.id}`} key={item.id} className='text-blue-500 hover:underline mt-4'>
          {item.title}
        </Link>
        
      ))}
    </div>
    
  )
}

export default page
