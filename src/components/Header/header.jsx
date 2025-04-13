import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className=" flex justify-between w-full">
        <div className="part-left w-250 flex flex-col justify-between p-20 items-center ">
            <h1 className=' font-bold text-4xl text-amber-50'>The best site to learn about the best games <br /><br /><span className=' text-blue-800'>game</span><span className=' text-red-600'>report</span></h1><br /><br /><br /><br />
            <p className=' text-gray-600 w-180'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ipsum deserunt, molestiae qui dolores ea illo rerum odit ratione iusto repellendus earum iste consequuntur doloremque! Facilis quis amet nemo ratione.
            Exercitationem ipsum quas, nostrum ipsa veritatis voluptatibus quos totam obcaecati ratione expedita quae tempora distinctio modi dolore eum reiciendis eveniet a quod perferendis iusto odio. Ullam, eius ipsa! Labore, magni!
            Quis, adipisci vel tenetur aliquam perspiciatis voluptate, ex impedit doloribus commodi explicabo nemo? Soluta distinctio commodi fugit deleniti deserunt. Dolore voluptatibus blanditiis mollitia nobis nisi quis ducimus voluptate magni soluta?
            Nemo facilis eaque delectus blanditiis, culpa dolores dignissimos. Dolore repellat iste, magnam aut libero corporis odio. Eos, ratione! Ab, asperiores maiores? Ullam nobis sapiente culpa molestias consectetur corporis consequatur aliquid.</p>
            <Link href='/blog' className='text-amber-50 font-bold text-10 bg-blue-800 w-40 flex justify-center p-4 rounded-4xl'>blog page</Link>
        </div>
        <div className="part-right w-250 flex justify-center h-200 ">
        <img src="/godofwar2.png" alt="" className='p-6  rounded-4xl'/>
        </div>
    </div>
  )
}

export default Header