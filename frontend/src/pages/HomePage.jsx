import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NewsCard from '../components/NewsCard'

const HomePage = () => {
  const [news, setNews] = useState([])
  return (
    <div className=''>
        <div className='bg-[url("https://imageio.forbes.com/blogs-images/bernardmarr/files/2019/05/Artificial-Intelligence-Is-Creating-A-Fake-World-What-Does-That-Mean-For-Humans-1200x668.jpg?height=395&width=711&fit=bounds")] h-72 bg-cover bg-center flex justify-center items-center'>
          <div className='bg-gradient-to-r from-white via-gray-600 to-white bg-clip-text bg-black/40 backdrop-blur-md p-4 rounded-lg   overflow-hidden text-transparent cursor-pointer'>
            <h1 className='text-6xl font-bold ml-28'>MindFeed - <span className='text-4xl'>AI Powered Personalized News Feed</span></h1>
            <p className='mx-[10%] text-center text-2xl text-gray-400'>Stay informed with the latest news. Sign up to get personalized recommendations based on your interests.</p>
          </div>
        </div>
        <div className='md:mx-[12%] '>
          <div className='flex justify-between my-5 items-center'>
            <h1 className='text-2xl font-bold'>Latest News</h1>
            <p>6 Articles</p>
          </div>
          <div>
            <NewsCard /> 
          </div>
        </div>
    </div>
  )
}

export default HomePage