import React from 'react'
import { IoOpenOutline } from "react-icons/io5";
import { CiSaveDown2 } from "react-icons/ci";
import { Link } from 'react-router-dom';
const RANDOM_URL = "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"

const NewsCard = ({title, id,  author, image, text, publish_date, url}) => {    
  return (
    <div className="card bg-base-100 w-96 shadow-sm shadow-gray-500 rounded-lg hover:shadow-md bg-gradient-to-r from-gray-900 to-gray-800">
        <figure>
            <img
                src={image ? image : RANDOM_URL}
                alt="news_cover" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{text.substr(0, 150) + "..."}</p>
            <div className="card-actions items-center">
                <p className='font-bold'>{author ? author : "Unknown"}</p>
                <button className="btn btn-xs rounded-sm hover:border-red-50" onClick={()=>document.getElementById(`my_modal_${id}`).showModal()}>View</button>
                <dialog id={`my_modal_${id}`} className="modal">
                    <div className="modal-box w-11/12 max-w-5xl bg-gradient-to-r from-gray-900 to-gray-800 rounded-md">
                        <form method="dialog" className='mb-4'>
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:bg-gray-600">✕</button>
                        </form>
                        <div>
                            <img
                                src={image ?? RANDOM_URL}
                                alt="news_cover" className='rounded-md w-full h-80 object-fill'/>
                            <div className='flex items-center w-fit mx-3 my-2 gap-4'>
                                <p className='font-bold bg-gray-500 px-2 py-1 rounded-md'>{author}</p>
                                <p className='bg-gray-500 px-2 py-1 rounded-md'>{publish_date}</p>
                            </div>
                            <p className='font-semibold mx-3'>{text}</p>
                            <div className='mx-3 mt-4 flex gap-3 justify-end'>
                                <button className='border px-4 py-1 cursor-pointer flex items-center gap-2 justify-center'><CiSaveDown2 /> save</button>
                                <Link to={url} target='_blank'>
                                    <button className='border px-4 py-1 cursor-pointer flex items-center gap-2 justify-center'><IoOpenOutline /> Read Full</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    </div>
  )
}
export default NewsCard