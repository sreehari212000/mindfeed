import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const SignIn = () => {
  const { login } = useContext(AppContext)
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

  const handleSignIn = async (e) => {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Please enter email and password.')
      return
    }

    setLoading(true)
    try {
      const response = await fetch(`${API_URL}/api/users/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.message || data.error || 'Sign in failed')
      }

      const token = data.token
      login({email, token})
      localStorage.setItem('mindfeed_token', token)
      localStorage.setItem('mindfeed_email', email)

      navigate('/')
    } catch (err) {
      setError(err.message || 'Unable to sign in')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='h-[93vh] flex justify-center items-center'>
      <div className="border rounded-md flex flex-col items-center p-10 w-full max-w-md glass backdrop-blur-md gap-6 pb-14">
        <h3 className="size-10 flex justify-center items-center text-2xl bg-gray-800 rounded-md font-bold">M</h3>
        <h3 className='text-2xl font-semibold'>Welcome Back</h3>
        <p className='text-center'>Enter your credentials to access your personalized news feed</p>

        {error && <div className='text-sm text-red-600'>{error}</div>}

        <form onSubmit={handleSignIn} className='w-full space-y-4'>
          <label className="floating-label w-full">
            <span>Your Email</span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="mail@site.com"
              className="input input-md w-full"
            />
          </label>
          <label className="floating-label w-full">
            <span>Your Password</span>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="********"
              className="input input-md w-full"
            />
          </label>
          <button
            type='submit'
            disabled={loading}
            className="btn overflow-hidden bg-white/70 backdrop-blur rounded-md text-black w-full"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className='text-xs'>Don't have an account? <Link to={'/signup'} className='underline cursor-pointer text-blue-400'>Sign up</Link></p>
      </div>
    </div>
  )
}

export default SignIn