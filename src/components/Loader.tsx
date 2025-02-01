import React from 'react'

const Loader = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500'/>
    </div>
  )
}

export default Loader;