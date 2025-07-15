
import { Post } from '@/app/components/Post';
import { prisma } from '@/app/lib/prisma';
import { equal } from 'assert';
import React from 'react'
// import Post from "/components/Post";
// import Post from "@/app/components/Post"


  interface PostPageProps {
  params: {
    id: string;
  };
}

async function page({ params }: PostPageProps) {
   const {id} = params;
   const post:any = await prisma.post.findUnique({
    where:{
        id:parseInt(id)
    }
   })

   

  return (
    <div className='max-w-2xl mx-auto p-6 min-h-screen'>
        
      <Post post={post} key={post.id}/>
    </div>

  )
}

export default page
