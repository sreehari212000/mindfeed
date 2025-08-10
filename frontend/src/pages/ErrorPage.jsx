import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='flex flex-col gap-4 mt-52 items-center'>
        <h1 className='text-5xl'>Oops!</h1>
        <h3>404 - PAGE NOT FOUND</h3>
        <p>The page you are looking for is not available</p>
        <Link to={'/'} className='p-3 rounded-xl shadow-sm shadow-white duration-300 hover:text-gray-400'>GO TO HOME PAGE</Link>
    </div>
  )
}

export default ErrorPage