import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
  const {user} = useContext(AppContext)
  return (
    <nav className='flex bg-black text-white p-2 justify-around items-center'>
        <div className='flex gap-2 items-center'>
            <h1 className='border p-2 font-semibold rounded-lg shadow-md hover:cursor-pointer'>M</h1>
            <h4 className='text-lg'>Mindfeed</h4>
        </div>
        <div className='flex gap-14'>
            <Link to={'/'}>Home</Link>
            <Link to={'/saved'}>Saved</Link>
        </div>
        <div className='flex gap-10'>
            <Link to={'signin'}>Sign in</Link>
            <Link to={'signup'}>Sign up</Link>
        </div>
    </nav>
  )
}

export default Navbar