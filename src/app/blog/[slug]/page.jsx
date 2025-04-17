import React from 'react';

function SinglePage({ params }) {
  const { slug } = params;

  return (
    <div className='flex justify-center items-center h-screen bg-[#170530]'>

    <h1 className=' text-4xl text-center text-amber-50'>   number blog:  {slug}</h1>

    </div>
  );
}

export async function generateMetadata({ params }) {
  return {
    title: `Here is blog post with id: ${params.slug}`,
    description: `This is blog post page for ID: ${params.slug}`,
  }
}

export default SinglePage;
