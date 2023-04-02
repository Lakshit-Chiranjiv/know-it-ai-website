'use client'

import React from 'react'

const ErrorPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full'>
        <h1 className='text-2xl md:text-3xl lg:text-5xl text-white font-bold'>Oops!</h1>
        <h1 className='text-2xl md:text-3xl lg:text-5xl text-white font-bold'>Some error occured</h1>
    </div>
  )
}

export default ErrorPage