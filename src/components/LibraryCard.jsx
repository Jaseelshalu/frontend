import React from 'react'
import Button from '../subComponents/Button'
import document from '../assets/documents.svg'

const LibraryCard = () => {
  return (
    <div className='basis-[250px] flex-1 flex-shrink-0 bg-color6 p-6 rounded-3xl '>
        <div className="bg-color4 rounded-2xl flex justify-center ">
        <img src={document} alt="" className='py-6' />
        </div>
        <p className='text-2xl font-semibold pt-4'>Title</p>
        <p className='pt-2'>Lorem ipsum dolor sit amet consectetur ad</p>
        <div className="pt-2 pb-2">
            <Button bg={'color3'}/>
        </div>

    </div>
  )
}

export default LibraryCard