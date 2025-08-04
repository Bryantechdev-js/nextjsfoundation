import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

async function Navbar() {
    const {getUser} = getKindeServerSession();
    const user = await getUser();


    console.log(user);
  return (
    <div className='max-w-full h-10 bg-black flex justify-between items-center px-10 sticky top-0 z-50'>
        <div className="logo bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-2xl">
            Blogy
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

            <div className="login flex gap-20">
                {user ? (
                    <div className="flex items-center gap-2">
                        <LogoutLink className='text-white'>Logout</LogoutLink>
                    </div>
                ) : (
                    <LoginLink postLoginRedirectURL="/post" className='text-white'>Sign in</LoginLink>
                )}
              
                <RegisterLink postLoginRedirectURL="/" className='text-white'>Sign up</RegisterLink>
            </div>
        </ul>
    </div>
  )
}

export default Navbar
