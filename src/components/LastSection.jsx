import React from 'react'
import read from '../assets/readQuran.svg'
import invite from '../assets/invite.svg'
import ad from '../assets/add.png'
import { useNavigate } from 'react-router-dom'
// import Slider from '../components/'
const LastSection = () => {
  const navigate=useNavigate()
  return (
    <div className='flex flex-col md:flex-row h-[200px] gap-4 mt-5 w-full'>
        <div className=" h-[250px] object-cover w-full  basis-2/4 ">
        {/* <Slider/> */}
        <img src={ad} alt="" className='h-[250px]' />
        </div>
        <div className="flex gap-2 basis-2/4">

        <div className="bg-color6 flex-1 p-3 flex flex-col gap-2 items-center justify-center rounded-[20px]" onClick={()=>navigate('/quran')}>
            <img src={read} alt="" />
            <p className='font-bold'>Recite & explore </p>
        </div>
        <div className="bg-color1 flex-1 p-3 flex flex-col gap-2 items-center justify-center rounded-[20px]">
        <img src={invite} alt=""  className='border border-gray-400 rounded-full'/>
        <p className='font-bold text-color6'>Recite & explore </p>
        </div>
    </div>
    </div>
  )
}

export default LastSection