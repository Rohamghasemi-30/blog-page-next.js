import Link from 'next/link'
import React from 'react'

function notfound() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <h1 className='font-bold text-7xl'>not found page</h1><br /><br />
        <Link href="/" className=' text-2xl text-blue-900'>go to the home</Link>
    </div>
  )
}

export default notfound