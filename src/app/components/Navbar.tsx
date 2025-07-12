import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='max-w-full h-10 bg-black flex justify-between items-center px-10 sticky top-0'>
        <div className="logo">
           <Image src="https://www.pexels.com/photo/close-up-photo-of-programming-of-codes-546819/" width={20} height={20} alt='logo'/>

        </div>
        <ul className='flex gap-25'>
            <li>
                <Link href="/" className='text-white cursor-pointer'>Home</Link>
            </li>
            <li>
                <Link href="/about" className='text-white cursor-pointer'>About</Link>
            </li>
            <li>
                <Link href="/create" className='text-white cursor-pointer'>Create</Link>
            </li>
            <li>
                <Link href="/post" className='text-white cursor-pointer'>Post</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar
