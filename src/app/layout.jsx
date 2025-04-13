import React from 'react'
import './globals.css'
import Navbar from '@/components/Navbar/navbar'


function layout({children}) {
  return (
    <html lang="en">
    <body>
    <Navbar/>
    {children}
    </body>
    </html>
  )
}

export default layout