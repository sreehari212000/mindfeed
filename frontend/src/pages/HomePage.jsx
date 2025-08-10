import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className=''>
        <div className='bg-[url("https://imageio.forbes.com/blogs-images/bernardmarr/files/2019/05/Artificial-Intelligence-Is-Creating-A-Fake-World-What-Does-That-Mean-For-Humans-1200x668.jpg?height=395&width=711&fit=bounds")] h-72 bg-cover bg-center flex justify-center items-center'>
        <h1 className='text-6xl font-bold bg-gradient-to-r from-white via-gray-600 to-white bg-clip-text bg-black/40 backdrop-blur-md p-4 rounded-lg overflow-hidden text-transparent cursor-pointer '>MindFeed - <span className='text-4xl'>AI Powered Personalized News Feed</span></h1>
        </div>
    </div>
  )
}

export default HomePage