import React from 'react'
import Image from 'next/image'
import img from "../../public/assets/img.jpg"
import { AiFillShopping } from "react-icons/ai"
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="hero min-h-[80vh] overflow-hidden relative">
      <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px]">
        <Image src={img} alt="Cozy Corner" className="bg-fixed bg-center bg-no-repeat w-full h-full object-cover" />
      </div>
      <div className="hero-overlay bg-inherit"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
          <h1 className="mb-5 scroll-m-20 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-myWhite">
            Futuristic <span className='text-red-600'>Design</span>
          </h1>
          <p className="mb-5 scroll-m-20 text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-red-600">
            Renew your wardrobe home with sleek and stylish apparels
          </p>

          <div className="flex items-center justify-center mt-4">
            <Link href={"/customdesign"}>
           
            <button className="flex items-center font-white p-2 outline outline-offset-2 outline-1 group hover:rounded-3xl duration-300 hover:outline-red-950">
              <AiFillShopping className="mr-2 h-6 w-6 group-hover:text-red-950 group-hover:animate-bounce" />
              Shop now
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
