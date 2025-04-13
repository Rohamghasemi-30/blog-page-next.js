import Link from 'next/link'
import React from 'react'


function Navbar() {
  return (
    <nav className='flex justify-between cul w-full p-2 bg-[#1c0838]'>
      <div className=" flex w-50 justify-start items-center">
      <img src="/logo.png" alt="" width="300px" height="500px" className=' flex'/>
      </div>
      <ul className=' flex justify-between items-center w-300 font-bold text-amber-50'>
        <li><Link href='/'>home</Link></li>
        <li>about</li>
        <li><Link href="/blog">blog</Link></li>
        <li>shop</li>
        <li>faq</li>
      </ul>
      <div className=" flex w-50 items-center justify-end p-2">
        <button className=' bg-blue-700 rounded-4xl w-30 h-10  font-bold text-amber-50'>login</button>
      </div>
    </nav>
  )
}

export default Navbar