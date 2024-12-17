import React, { useContext, useState } from 'react'
import Button3 from '../../subComponents/Button3';

const Points = ({data,setIndex}) => {
  console.log(data);
  
  return (
    <div className="flex ">

    <div className='container items-center justify-center'>
     
      <p className='bg-color4 inline-block px-4 py-2 rounded-full font-semibold'>chapter:{data.chapterNo}/Lesson {data.lessonNo}</p>
      <h1 className='h1 flex items-center mt-3'>{data.chapterName}</h1>
      <div className="bg-color3 px-5 py-4 rounded-md mt-4">
      <p className=' text-2xl font-bold	 text-color6 rounded-md max-w-[80%] '> {data.title&& data.title}</p>
      <p className=' text-xl font-semibold	 text-color6 rounded-md max-w-[80%] '> {data.content}</p>
      </div>
      <div className="mt-3">
      <Button3 text={'next'} fn={setIndex}/>

      </div>
  
      </div>
    </div>

  )
}

export default Points