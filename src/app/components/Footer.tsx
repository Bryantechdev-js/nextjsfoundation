import React from 'react'

function Footer() {
  return (
    <div className='max-w-full h-10 bg-black text-white'>
        <div className='flex justify-center items-center h-full'>
            <p className='text-sm'>© 2023 My Blog. All rights reserved.</p>
        </div>
        <div className='flex justify-center items-center h-full'>
            <p className='text-sm text-center'>Follow us on 
                <a href="#" className='text-blue-500 ml-1'>Twitter</a>, 
                <a href="#" className='text-blue-500 ml-1'>Facebook</a>, 
                <a href="#" className='text-blue-500 ml-1'>Instagram</a>
            </p>
        </div>
    </div>
  )
}

export default Footer
