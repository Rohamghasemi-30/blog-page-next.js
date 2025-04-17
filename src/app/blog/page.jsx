import Link from 'next/link'
import React from 'react'

function Postpage() {
  const blogPosts = [...Array(10)].map((_, i) => i + 1);

  return (
    <div className='flex justify-between items-center flex-row flex-wrap w-full bg-[#170530] p-5 gap-4'>
      {blogPosts.map((id) => (
        <div key={id} className="box-blog w-80 h-auto p-4 border-solid border-2 border-b-black bg-blue-400 rounded-xl">
          <img src="/blog1.avif" alt="" className='rounded-2xl mb-2' />
          <h2 className='font-bold text-center text-black'>Assassin's Creed Shadow release date</h2>
          <p className=' text-center text-amber-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae deserunt sapiente illum ad.</p><br />
          <br />
          <Link href={`/blog/${id}`} className='block text-center text-blue-800 font-bold'>
          reading {id}
          </Link>
        </div>
      ))}
    </div>
  )
}

export async function generateMetadata({ params }) {
  return {
    title: `Here is blog post`,
    description: `This is blog post page`,
  }
}

export default Postpage;
