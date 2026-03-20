import React, { useEffect, useState } from 'react'
import NewsCard from '../components/NewsCard'

const LOCALSTORAGE_KEY = 'savedNews'

function SavedPage() {
  const [savedArticles, setSavedArticles] = useState([])

  useEffect(() => {
    const load = () => {
      try {
        const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) || '[]')
        setSavedArticles(Array.isArray(data) ? data : [])
      } catch (err) {
        console.error('Failed to load saved articles', err)
        setSavedArticles([])
      }
    }
    load()
  }, [])

  const clearAll = () => {
    localStorage.removeItem(LOCALSTORAGE_KEY)
    setSavedArticles([])
  }

  return (
    <div className='my-8 mx-10'>
      <div className='flex justify-between items-center mb-4'>
        <h1 className='text-3xl font-bold'>Saved Articles</h1>
        {savedArticles.length > 0 && (
          <button
            onClick={clearAll}
            className='px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700'
          >
            Clear All
          </button>
        )}
      </div>

      {savedArticles.length === 0 ? (
        <div className='text-gray-400 text-lg'>No saved articles yet. Save from the home page to see them here.</div>
      ) : (
        <div className='flex flex-wrap gap-8'>
          {savedArticles.map((item) => (
            <NewsCard
              key={item.id}
              id={item.id}
              title={item.title}
              author={item.author}
              image={item.image}
              text={item.text}
              publish_date={item.publish_date}
              url={item.url}
              onSavedChange={(articleId, saved) => {
                if (!saved) {
                  const next = savedArticles.filter((savedItem) => savedItem.id !== articleId)
                  setSavedArticles(next)
                }
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default SavedPage