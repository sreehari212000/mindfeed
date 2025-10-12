import React from 'react'
import { IoOpenOutline } from "react-icons/io5";
import { CiSaveDown2 } from "react-icons/ci";
const RANDOM_URL = "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"

const NewsCard = ({title, author, image, text, publish_date}) => {    
  return (
    <div className="card bg-base-100 w-96 shadow-sm shadow-gray-500 rounded-lg hover:shadow-md bg-gradient-to-r from-gray-900 to-gray-800">
        <figure>
            <img
                src={image ? image : RANDOM_URL}
                alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>Discover how artificial intelligence is transforming the way we find and consume news content, making information discovery more intuitive and...</p>
            <div className="card-actions items-center">
                <p className='font-bold'>{author ? author : "Unknown"}</p>
                <button className="btn btn-xs rounded-sm hover:border-red-50" onClick={()=>document.getElementById('my_modal_3').showModal()}>View</button>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl bg-gradient-to-r from-gray-900 to-gray-800 rounded-md">
                        <form method="dialog" className='mb-4'>
                        {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:bg-gray-600">✕</button>
                        </form>
                        <div>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" className='rounded-md w-full h-80 object-fill'/>
                            <div className='flex items-center w-fit mx-3 my-2 gap-4'>
                                <p className='font-bold bg-gray-500 px-2 py-1 rounded-md'>News18</p>
                                <p className='bg-gray-500 px-2 py-1 rounded-md'>2024-01-15</p>
                            </div>
                            <p className='font-semibold mx-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, fugiat alias cupiditate dicta eaque dolorem quas atque rerum libero aliquid esse, a possimus deleniti provident sit? Incidunt dicta ex saepe. Laudantium fuga quos repellendus in cupiditate neque suscipit, dolor, quibusdam nostrum vero quo delectus laboriosam voluptas temporibus consequatur eaque modi ea rerum dolores optio laborum. Nam, quo? Aut, minima deleniti quam, quisquam saepe beatae debitis aperiam facilis eius reprehenderit totam sapiente delectus nobis rerum soluta pariatur! Impedit nostrum neque qui quos! Dolor cum maiores incidunt beatae id iusto. Maxime, quo. Natus laborum consectetur vero saepe odit id fuga minus praesentium?</p>
                            <div className='mx-3 mt-4 flex gap-3 justify-end'>
                                <button className='border px-4 py-1 cursor-pointer flex items-center gap-2 justify-center'><CiSaveDown2 /> save</button>
                                <button className='border px-4 py-1 cursor-pointer flex items-center gap-2 justify-center'><IoOpenOutline /> Read Full</button>
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