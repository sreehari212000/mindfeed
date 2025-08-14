import React from 'react'

const SignIn = () => {
  return (
    <div className='h-[93vh] flex justify-center items-center'>
      <div className="border rounded-md flex flex-col items-center p-10 w-full max-w-md glass backdrop-blur-md gap-6 pb-14">
        <h3 className="size-10 flex justify-center items-center text-2xl bg-gray-800 rounded-md font-bold">M</h3>
        <h3 className='text-2xl font-semibold'>Welcome Back</h3>
        <p className='text-center'>Enter your credentials to access your personalized news feed</p>
        <label className="floating-label w-full">
          <span>Your Email</span>
          <input
            type="text"
            placeholder="mail@site.com"
            className="input input-md w-full"
          />
        </label>
        <label className="floating-label w-full">
          <span>Your Password</span>
          <input
            type="password"
            placeholder="********"
            className="input input-md w-full"
          />
        </label>
        <button className="btn overflow-hidden bg-white/70 backdrop-blur rounded-md text-black w-full">Sign In</button>
    </div>
  </div>
  )
}

export default SignIn