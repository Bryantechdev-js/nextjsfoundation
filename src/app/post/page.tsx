// import Link from 'next/dist/client/link'
import Link from 'next/link'
import { Console, error, log } from 'node:console'
import { console } from 'node:inspector'
import React from 'react'

async function page() {
  let data = []
  try{
    const dummyData = await fetch("https://jsonplaceholder.typicode.com/posts",{
       method:"GET",
     })
   
      data = await dummyData.json()
  }
  catch(error){
    error ? console.error("check your network", error) : console.log("Data fetched successfully")   
  }
  return (
    <div className='max-w-full min-h-screen flex flex-col items-center  p-5'>
      <h1 className="text-3xl capitalize font-bold mb-4 text-center my-5">Blog Post Title</h1>
      <p className="text-[16px]">This is the content of the blog post.</p>
        <ul>
        {data.map((item:{title:string,id:number})=>(
          <li key={item.id}>
            <Link href={`/post/${item.id}`} >{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default page
