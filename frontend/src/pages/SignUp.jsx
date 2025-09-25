import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'

const SignUp = () => {  
  const [name, setName] = useState("")
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState("")
  const [interests, setInterests] = useState([])
  const [currentInterest, setCurrentInterest] = useState('')
  const addInterest = (e) =>{
    e.preventDefault();
    if(currentInterest.trim() === "")return
    setInterests(prev => [...prev, currentInterest])
    setCurrentInterest('')
  }
  const removeInterest = (interest) => {
    setInterests((prev) => prev.filter(item => item !== interest))
  }
  return (
    <div className='mt-16 flex justify-center'>
      <div className="border rounded-md flex flex-col items-center p-10 w-full max-w-md glass backdrop-blur-md gap-6 pb-14">
        <h3 className="size-10 flex justify-center items-center text-2xl bg-gray-800 rounded-md font-bold">M</h3>
        <h3 className='text-2xl font-semibold'>Create Your Account</h3>
        <p className='text-center text-sm'>Join Mindfeed to get personalized news recommendations</p>
        <label className="floating-label w-full">
          <span>Your Full Name</span>
          <input
            type="text"
            placeholder="John Doe"
            className="input input-md w-full"
          />
        </label>
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
        <label className="floating-label w-full">
          <span>Confirm Password</span>
          <input
            type="password"
            placeholder="********"
            className="input input-md w-full"
          />
        </label>
        <div className="w-full">
  <div className="space-y-2">
    <form onSubmit={addInterest} className="flex gap-2">
      <input
        id="interests"
        type="text"
        placeholder="Add your interests (e.g., Technology, Sports, Health)"
        className="input w-full border-0"
        value={currentInterest}
        onChange={(e) => setCurrentInterest(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addInterest(e);
          }
        }}
      />
      <button
        type="button"
        onClick={addInterest}
        className="btn"
      >
        Add
      </button>
    </form>

    {interests.length > 0 && (
      <div className="flex flex-wrap gap-2 p-3 bg-base-200 rounded-md mt-4">
        {interests.map((interest, index) => (
          <div
            key={index}
            className="badge badge-secondary flex items-center gap-1"
          >
            {interest}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 cursor-pointer hover:text-error"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => removeInterest(interest)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        ))}
      </div>
    )}
  </div>
</div>
  <button className="btn overflow-hidden bg-white/70 backdrop-blur rounded-md text-black w-full">Sign Up</button>
  </div>
  </div>
  )
}

export default SignUp