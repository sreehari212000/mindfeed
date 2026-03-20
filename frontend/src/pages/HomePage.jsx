import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NewsCard from '../components/NewsCard'
import { AppContext } from '../context/AppContext'

const HomePage = () => {
  const { user } = useContext(AppContext)
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

  useEffect(() => {
    const fetchFromAPI = async () => {
      try {
        const endpoint = user ? '/api/news/feed' : '/api/news/latest'
        const headers = {
          'Content-Type': 'application/json',
        }
        if (user?.token) {
          headers.Authorization = `Bearer ${user.token}`
        }

        const res = await fetch(`${API_URL}${endpoint}`, {
          method: 'GET',
          headers,
        })

        if (!res.ok) {
          const body = await res.json().catch(() => ({}))
          throw new Error(body.message || body.error || 'Error fetching news')
        }

        const data = await res.json()
        setNews(data.result || [])
      } catch (err) {
        console.log('Error fetching news', err)
        setError(err.message || 'Unable to fetch news')
      } finally {
        setLoading(false)
      }
    }
    fetchFromAPI()
  }, [user, API_URL])
  console.log(user);
  
  if(loading)return
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
            {user === null ? <h1 className='text-2xl font-bold'>Latest News</h1> : <h1 className='text-2xl font-bold'>Personalised News for {user.email.split('@')[0]}</h1>}
            <p>{news.length} Articles</p>
          </div>
          <div className='flex flex-wrap gap-8 mx-14'>
            {
              news.map((item) => <NewsCard key={item.id} id={item.id} author={item.payload.author} image={item.payload.image} publish_date={item.payload.publish_date} text={item.payload.text} title={item.payload.title} url={item.payload.url}/> )
            }
          </div>
        </div>
    </div>
  )
}

export default HomePage