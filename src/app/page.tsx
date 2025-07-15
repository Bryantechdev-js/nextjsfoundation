// import { Prisma } from "@prisma/client";


import Image from "next/image";
import { prisma } from "./lib/prisma";



export default async function Home() {
  
  return (
   <div className="text-center pt-12 h-screen max-w-full">
      
      <h1 className="text-3xl capitalize font-bold mb-4">Welcome to my blog</h1>
      <p className="text-[16px]">this is a Nextjs blog</p>
      
   </div>
  );
}
