import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
  const { user, logout } = useContext(AppContext)
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
        <div className='flex gap-3 items-center'>
          {user ? (
            <>
              <span className='bg-white/10 text-white px-3 py-1 rounded-full text-sm font-medium tracking-wide'>
                {user.email.split('@')[0]}
              </span>
              <button
                onClick={logout}
                className='px-4 py-1 rounded-lg bg-red-600 hover:bg-red-700 transition-colors text-sm font-semibold shadow-md cursor-pointer'
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link
                to={'signin'}
                className='px-4 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors text-sm font-semibold shadow-md'
              >
                Sign in
              </Link>
              <Link
                to={'signup'}
                className='px-4 py-1 rounded-lg bg-transparent border border-white hover:bg-white hover:text-black transition-colors text-sm font-semibold'
              >
                Sign up
              </Link>
            </>
          )}
        </div>
    </nav>
  )
}

export default Navbar