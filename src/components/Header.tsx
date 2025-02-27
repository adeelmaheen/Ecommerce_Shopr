// "use client";
// import React from 'react'
// import Link from 'next/link'
// import { ClerkLoaded, SignedIn, SignInButton, UserButton, useUser } from '@clerk/nextjs';
// import Form from 'next/form';
// import { PackageIcon, TrolleyIcon } from '@sanity/icons'
// import { useBasketStore } from '../../store/store';
// // import { currentUser } from '@clerk/nextjs/server';
// // import { getMyOrders } from '@/sanity/lib/orders/getMyOrders';




// const Header = () => {
//   const {user} = useUser();
    
//     const itemCount = useBasketStore((state)=>
//      state.items.reduce((total,item)=> total + item.quantity,0)
// );
//         const createClerkPasskey = async () => {
//             try{
//                 const response = await user?.createPasskey();
//                 console.log(response);
//             } catch (err) {
//                 console.error("Error:", JSON.stringify(err, null, 2));
//             }
//         }
//     return (
//         <header className='flex flex-wrap justify-between items-center px-4 py-2'>
//             {/* top header  i will change */}
//             <div className='flex w-full flex-wrap justify-between items-center'>
//                 <Link href='/' className='text-2xl font-bold text-blue-500 hover:opacity-50 cursor-pointer mx-auto sm:mx-0'>
//                 Shopr
//                 </Link>
            
//                 <Form action="/search" className='w-full sm:w-auto sm:flex-1 sm:mx-4 sm:mt-0'>
//                     <input name="query" type='text' placeholder='Search for products' className='bg-gray-100 text-gray-800 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border w-full max-w-4xl'/>
//                 </Form>

//                 {/* my basket */}
//                 <div className='flex items-center space-x-4 mt-4 sm:mt-0 flex-1 sm:flex-none'>
//                     <Link href="/basket" className='flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
//                         <TrolleyIcon className='w-6 h-6'/>
//                        {/* span item count once global statre is implemented  */}
//                             <span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-x5'>{itemCount}</span>
                    
//                     <span>My Basket</span>
//                     </Link>

//                     {/* user area */}
//                     <ClerkLoaded>
//                         <SignedIn>
//                             <Link href="/orders" className='flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
//                             <PackageIcon className='w-6 h-6'/>
//                             <span>My order</span>
//                             </Link>
//                         </SignedIn>
//                         { user ? (
//                             <div className='flex items-center space-x-2'>
//                                 <UserButton/>
//                                 <div className='hidden sm:block text-xs'>
//                                 <p className='text-gray-400'> Welcome Back </p>
//                                 <p className='font-bold'>{user.fullName}!</p>
//                                 </div>
//                             </div>

//                         ) : (
//                             <SignInButton mode='modal' />
//                         )}
//                         { user && (
//                             <button onClick={createClerkPasskey} className='bg-white hover:bg-blue-700 hover:text-white animate-pulse text-blue-500 font-bold py-2 px-4 rounded border-blue-300 border'>Create passkey</button>
//                         )}
//                     </ClerkLoaded>
//                 </div>
//             </div>
//         </header>
//     )
// }


// export default Header;
// ===
"use client";
import React from "react";
import Link from "next/link";
import { ClerkLoaded, SignedIn, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Form from "next/form";
import { PackageIcon, TrolleyIcon } from "@sanity/icons";
import { useBasketStore } from "../../store/store";

const Header = () => {
  const { user } = useUser();
  const itemCount = useBasketStore((state) => state.items.reduce((total, item) => total + item.quantity, 0));

  const createClerkPasskey = async () => {
    try {
      const response = await user?.createPasskey();
      console.log(response);
    } catch (err) {
      console.error("Error:", JSON.stringify(err, null, 2));
    }
  };

  return (
    <header className="flex flex-wrap justify-between items-center px-4 py-2 bg-white shadow-md">
      <div className="flex w-full flex-wrap justify-between items-center gap-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-500 hover:opacity-80 sm:mx-0 mx-auto">
          Shopr
        </Link>

        {/* Search Bar */}
        <Form action="/search" className="w-full sm:w-auto sm:flex-1">
          <input
            name="query"
            type="text"
            placeholder="Search for products"
            className="bg-gray-100 text-gray-800 px-4 py-2 rounded w-full max-w-4xl focus:outline-none focus:ring-2 focus:ring-blue-500 border"
          />
        </Form>

        {/* Basket & User Section */}
        <div className="flex items-center space-x-4 flex-wrap">
          {/* Basket */}
          <Link
            href="/basket"
            className="relative flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            <TrolleyIcon className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {itemCount}
            </span>
            <span className="ml-2 hidden sm:inline">My Basket</span>
          </Link>

          {/* User Area */}
          <ClerkLoaded>
            <SignedIn>
              <Link
                href="/orders"
                className="relative flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                <PackageIcon className="w-6 h-6" />
                <span className="ml-2 hidden sm:inline">My Orders</span>
              </Link>
            </SignedIn>
            {user ? (
              <div className="flex items-center space-x-2">
                <UserButton />
                <div className="hidden sm:block text-xs">
                  <p className="text-gray-400">Welcome Back</p>
                  <p className="font-bold">{user.fullName}!</p>
                </div>
              </div>
            ) : (
              <SignInButton mode="modal" />
            )}
            {user && (
              <button
                onClick={createClerkPasskey}
                className=" bg-white  hover:bg-blue-700 hover:text-white animate-pulse text-blue-500 font-bold py-2 px-4 rounded border-blue-300 border"
              >
                Passkey
              </button>
            )}
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
};

export default Header;
