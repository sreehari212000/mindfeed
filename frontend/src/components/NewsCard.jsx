import React from 'react'

const NewsCard = () => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm shadow-gray-500 rounded-lg hover:shadow-md">
        <figure>
            <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
        <div className="card-body">
            <h2 className="card-title">AI-Powered Semantic Search Revolutionizes News Discovery</h2>
            <p>Discover how artificial intelligence is transforming the way we find and consume news content, making information discovery more intuitive and...</p>
            <div className="card-actions items-center">
                <p>News18</p>
                <button className="btn btn-xs" onClick={()=>document.getElementById('my_modal_3').showModal()}>View</button>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box  w-11/12 max-w-5xl bg-black glass">
                        <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click on ✕ button to close</p>
                    </div>
                </dialog>
            </div>
        </div>
    </div>
  )
}
export default NewsCard