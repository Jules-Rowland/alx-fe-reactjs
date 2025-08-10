import React from 'react'

 const Card = () => {
  return (
    <div className='bg-gray-500 rounded-md shadow-lg px-3'>
      <h1 id="special" className="inline-block text-base md:text-[20px]  px-2 py-2 " >TITLE</h1> 
      <p>description</p> 
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded'>Card</button>
    </div>
  )
}
export default Card;
