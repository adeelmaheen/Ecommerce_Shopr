import React from 'react'
import { GrDeliver } from "react-icons/gr";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaMoneyBillTransfer } from "react-icons/fa6";



const Services = () => {
  return (
    
      <section className=" body-font mb-[200px] mt-[100px]">
  <div className="container px-5  mx-auto">
    {/* heading */}
    <div className="text-center mb-10">
      <h1 className="sm:text-3xl scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl mb-4">
        Our Services
      </h1>
      
      <div className="flex mt-2 justify-center">
        <div className="w-32 h-1 rounded-full bg-blue-700 inline-flex" />
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        {/* delivery */}
      <div className="group p-4 lg:w-1/3 mx-auto flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center   text-black-500 mb-5 flex-shrink-0">
        <div className='w-20 h-20'>
        <GrDeliver className='w-[50px] h-[50px]' />
        </div>
        
        </div>
        <div className="flex-grow">
          <h2 className="text-myBlackHead group-hover:text-blue-800 duration-300 capitalize scroll-m-20 text-lg font-bold tracking-tight lg:text-xl mb-3">
            Free Delivery
          </h2>
          <p className="text-myBlackPara line-clamp-2 group-hover:text-blue-200 scroll-m-20  text-base font-semibold tracking-tight transition-colors">
            Free Delivery on Order 
          </p>
          
        </div>
      </div>
         {/* Money back gurantee */}
         <div className="group p-4 lg:w-1/3 mx-auto flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center   text-black-500 mb-5 flex-shrink-0">
        <div className='w-20 h-20'>
        
        <FaMoneyBillTransfer className='w-[50px] h-[50px]'/>
        </div>
        
        </div>
        <div className="flex-grow">
          <h2 className="text-myBlackHead group-hover:text-blue-800 duration-300 capitalize scroll-m-20 text-lg font-bold tracking-tight lg:text-xl mb-3">
            Money Back Gurantee
          </h2>
          <p className="text-myBlackPara line-clamp-2 group-hover:text-blue-200 scroll-m-20  text-base font-semibold tracking-tight transition-colors">
            Get Money Back Gurantee on Damage Products 
          </p>
          
        </div>
      </div>
         {/* Customer Service */}
         <div className="group p-4 lg:w-1/3 mx-auto flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center   text-black-500 mb-5 flex-shrink-0">
        <div className='w-20 h-20'>
        
        <RiCustomerService2Fill className='w-[50px] h-[50px]'/>

        </div>
        
        </div>
        <div className="flex-grow">
          <h2 className="text-myBlackHead group-hover:text-blue-800 duration-300 capitalize scroll-m-20 text-lg font-bold tracking-tight lg:text-xl mb-3">
            24/7 Customer Service
          </h2>
          <p className="text-myBlackPara line-clamp-2 group-hover:text-blue-200 scroll-m-20  text-base font-semibold tracking-tight transition-colors">
            For queries and questions feel free to contact
          </p>
          
        </div>
      </div>
     
    </div>
   
  </div>
</section>

    
  )
}

export default Services
