import React, { useState } from 'react'
import { DeleteDataMethod, UpdateData } from '../Api/AuthApi';

const Card = ({ data, DeleteCard,index }) => {
  const [Toggle, setToggle] = useState(true);
  const [Title, setTitle] = useState(data.title);
  const [Body, setBody] = useState(data.body)

  function Editable() {
    setToggle((toggle) => !toggle)
  }

  async function handleDeletePost(id) {
    try {
      const res = await DeleteDataMethod(id);
      console.log(res);
      if(res.status === 200){
        DeleteCard(id);
      }
    } catch (error) {
      console.log(error)
    }
  }


  const PutDataToAPI =(toggle)=>{
    if(!toggle){
      const obj = {title:Title,body:Body};
      UpdateData(data.id,obj)
    }
  }

  return (
    <div key={data.id} className='border min-h-90 border-gray-600 w-96 flex flex-col p-5 bg-[#191919] text-gray-100 rounded-lg shadow-md'>
      <h1 className='text-xl font-bold mb-4 text-white'>{index+1}</h1>
      {Toggle ? (
        <h2 className='font-semibold mb-3 text-lg'>Title : {Title}</h2>
      ) : (
        <input
          onChange={(e) => setTitle(e.target.value)}
          className='mb-4 bg-[#252525] border border-gray-500 rounded-md px-3 py-2 w-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all'
          type="text"
          placeholder='Write Title'
          value={Title}
        />
      )}

      {/* Description Section */}
      {Toggle ? (
        <p className='mb-6 text-gray-300 leading-relaxed grow'>Desc. : {Body}</p>
      ) : (
        <textarea
          onChange={(e) => setBody(e.target.value)}
          value={Body}
          className='mb-6 bg-[#252525] border border-gray-500 rounded-md px-3 py-2 w-full h-32 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-y'
          placeholder='Write Description...'
        />
      )}

      {/* Buttons */}
      <div className='flex gap-3 mt-auto'>
        <button
          onClick={() => { Editable(); PutDataToAPI(Toggle) }}
          className='cursor-pointer border border-gray-500 hover:bg-gray-700 hover:text-white rounded-md px-5 py-1.5 transition-colors active:scale-95 font-medium'>
          {Toggle ? "Edit" : "Save"}
        </button>
        <button
          onClick={() => handleDeletePost(data.id)}
          className='cursor-pointer border border-red-500/50 text-red-400 hover:bg-red-500/10 rounded-md px-5 py-1.5 transition-colors active:scale-95 font-medium'>
          Delete
        </button>
      </div>
    </div>
  )
}

export default Card