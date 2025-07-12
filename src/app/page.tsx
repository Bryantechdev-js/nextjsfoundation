// import { Prisma } from "@prisma/client";


import Image from "next/image";
import { prisma } from "./lib/prisma";



export default async function Home() {
  const post = prisma.post.findMany()
  return (
   <div className="text-center pt-12 h-screen max-w-full">
      
      <h1 className="text-3xl capitalize font-bold mb-4">Welcome to my blog</h1>
      <p className="text-[16px]">this is a Nextjs blog</p>
      {(await post).map((post) => (
        <div key={post.id}>
          <h2 className="text-2xl font-bold">{post.title}</h2>
          <p className="text-sm">{post.content}</p>
        </div>
      ))}
   </div>
  );
}
