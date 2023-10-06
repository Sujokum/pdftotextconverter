import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='w-full relative h-screen ' >
    <ul className="background">
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
</ul>
<div className='w-full h-screen flex gap-4 justify-center items-center'>
    <Link to={'/pdftextextractor'} className='bg-red-500 px-4 py-2 rounded-2xl shadow-md text-white'>PDF TEXT EXTRACTOR</Link>
    <Link to={'/ImgToText'} className='bg-red-500 px-4 py-2 rounded-2xl shadow-md text-white'>Image To Text</Link>
    <Link to={'/PdfImgToText'} className='bg-red-500 px-4 py-2 rounded-2xl shadow-md text-white'>PDF Image to Text</Link>
</div>
    </div>
  )
}

export default Home