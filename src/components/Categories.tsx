import React from 'react'
import Image from 'next/image'
import bed from "../../public/assets/coverbedsheet.jpg"
import curtain from "../../public/assets/curtain8.jpg"
import cusion from "../../public/assets/cusion2.jpg"
import shawal from "../../public/assets/covershawl.webp"
import dress from "../../public/assets/dress1.jpg"
import wall from "../../public/assets/wall2.jpg"
import painting from "../../public/assets/wallDecor.webp"
import emboridery from "../../public/assets/embridrywhite.jpg"
import Link from 'next/link'

const Categories = () => {
  return (
    <div className='mb-[100px] mt-[100px]'>
       {/* heading */}
    <div className="text-center mb-10">
      <h1 className="sm:text-3xl scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl mb-4">
        Our Categories
      </h1>
      
      <div className="flex mt-2 justify-center">
        <div className="w-32 h-1 rounded-full bg-blue-700 inline-flex" />
      </div>
    </div>
    {/* categories start from here */}
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {/* category 1 */}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
            <Link href={"#"}>
            
            <Image src={bed} alt="wall decor" width={350} height={350} className="rounded-xl duration-500 group-hover:scale-125"/>
        
        <div className='hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-0 scroll-m-20 text-3xl font-extrabold tracking-tight  bg-blue-300/55 text-center text-myWhite w-full'>
            <h1 className='uppercase'>Bedsheet</h1>
        </div>
        <div className='block lg:hidden absolute  duration-500 z-[100] bottom-0 scroll-m-20 text-3xl font-extrabold tracking-tight  bg-blue-300/55 text-center text-myWhite w-full'>
            <h1 className='uppercase'>Bedsheet</h1>
        </div>
        </Link>
        </div>
        {/* category 2 */}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
            <Link href={"#"}>
            
            <Image src={cusion} alt="wall decor" width={350} height={350} className="rounded-xl duration-500 group-hover:scale-125"/>
        
        <div className='hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-0 scroll-m-20 text-3xl font-extrabold tracking-tight  bg-blue-300/55 text-center text-myWhite w-full'>
            <h1 className='uppercase'>Cusions</h1>
        </div>
        <div className='block lg:hidden absolute  duration-500 z-[100] bottom-0 scroll-m-20 text-3xl font-extrabold tracking-tight  bg-blue-300/55 text-center text-myWhite w-full'>
            <h1 className='uppercase'>Cusions</h1>
        </div>
        </Link>
        </div>
        {/* category 3 */}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
            <Link href={"#"}>
            
            <Image src={dress} alt="wall decor" width={350} height={350} className="rounded-xl duration-500 group-hover:scale-125"/>
        
        <div className='hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-0 scroll-m-20 text-3xl font-extrabold tracking-tight  bg-blue-300/55 text-center text-myWhite w-full'>
            <h1 className='uppercase'>Dresses</h1>
        </div>
        <div className='block lg:hidden absolute  duration-500 z-[100] bottom-0 scroll-m-20 text-3xl font-extrabold tracking-tight  bg-blue-300/55 text-center text-myWhite w-full'>
            <h1 className='uppercase'>Dresses</h1>
        </div>
        </Link>
        </div>
        {/* category 4 */}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
            <Link href={"#"}>
            
            <Image src={curtain} alt="wall decor" width={350} height={350} className="rounded-xl duration-500 group-hover:scale-125"/>
        
        <div className='hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-0 scroll-m-20 text-3xl font-extrabold tracking-tight  bg-blue-300/55 text-center text-myWhite w-full'>
            <h1 className='uppercase'>Curtains</h1>
        </div>
        <div className='block lg:hidden absolute  duration-500 z-[100] bottom-0 scroll-m-20 text-3xl font-extrabold tracking-tight  bg-blue-300/55 text-center text-myWhite w-full'>
            <h1 className='uppercase'>Curtains</h1>
        </div>
        </Link>
        </div>
        {/* category 5 */}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
            <Link href={"#"}>
            
            <Image src={wall} alt="wall decor" width={350} height={350} className="rounded-xl duration-500 group-hover:scale-125"/>
        
        <div className='hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-0 scroll-m-20 text-3xl font-extrabold tracking-tight  bg-blue-300/55 text-center text-myWhite w-full'>
            <h1 className='uppercase'>Wall Decor</h1>
        </div>
        <div className='block lg:hidden absolute  duration-500 z-[100] bottom-0 scroll-m-20 text-3xl font-extrabold tracking-tight  bg-blue-300/55 text-center text-myWhite w-full'>
            <h1 className='uppercase'>Wall Decor</h1>
        </div>
        </Link>
        </div>
        {/* category 6 */}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
            <Link href={"#"}>
            
            <Image src={shawal} alt="wall decor" width={350} height={350} className="rounded-xl duration-500 group-hover:scale-125"/>
        
        <div className='hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-0 scroll-m-20 text-3xl font-extrabold tracking-tight  bg-blue-300/55 text-center text-myWhite w-full'>
            <h1 className='uppercase'>Shawl</h1>
        </div>
        <div className='block lg:hidden absolute  duration-500 z-[100] bottom-0 scroll-m-20 text-3xl font-extrabold tracking-tight  bg-blue-300/55 text-center text-myWhite w-full'>
            <h1 className='uppercase'>Shawl</h1>
        </div>
        </Link>
        </div>
         {/* category 7 */}
         <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
            <Link href={"#"}>
            
            <Image src={painting} alt="wall decor" width={350} height={350} className="rounded-xl duration-500 group-hover:scale-125"/>
        
        <div className='hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-0 scroll-m-20 text-3xl font-extrabold tracking-tight  bg-blue-300/55 text-center text-myWhite w-full'>
            <h1 className='uppercase'>Painting</h1>
        </div>
        <div className='block lg:hidden absolute  duration-500 z-[100] bottom-0 scroll-m-20 text-3xl font-extrabold tracking-tight  bg-blue-300/55 text-center text-myWhite w-full'>
            <h1 className='uppercase'>Painting</h1>
        </div>
        </Link>
        </div>
         {/* category 8 */}
         <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
            <Link href={"#"}>
            
            <Image src={emboridery} alt="wall decor" width={350} height={350} className="rounded-xl duration-500 group-hover:scale-125"/>
        
        <div className='hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-0 scroll-m-20 text-3xl font-extrabold tracking-tight  bg-blue-300/55 text-center text-myWhite w-full'>
            <h1 className='uppercase'>Customise Design</h1>
        </div>
        <div className='block lg:hidden absolute  duration-500 z-[100] bottom-0 scroll-m-20 text-3xl font-extrabold tracking-tight  bg-blue-300/55 text-center text-myWhite w-full'>
            <h1 className='uppercase'>Custom Design</h1>
        </div>
        </Link>
        </div>
    </div>
    </div>
  )
}

export default Categories
