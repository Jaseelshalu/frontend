import ProgressBar from "./ProgressBar";
import hadith from '../assets/hadith.svg'
import { IoBookOutline } from "react-icons/io5";
import { useState } from "react";
import Modal from "../components/Modal";
import Popup from "../components/Popup";
import { useNavigate } from "react-router-dom";

export default function CardIcon2({data}) {
  const [modal,setModal]=useState(false)
  const navigate=useNavigate()
  function handle(){
   navigate(`/challenges/${data}`)
  }
    return (
      <>
       <div onClick={handle} className="overflow-hidden  text-center rounded-[30px] flex flex-col items-center w-full bg-white  shadow-md text-slate-500 shadow-slate-200 relative">
  {/* Icon */}
  <div className="bg-color1 mt-6 w-20 h-20 rounded-full flex items-center justify-center text-white text-[30px]">
    <IoBookOutline />
  </div>

  {/* Body */}
  <div className="p-6 w-full">
    <h3 className="text-xl font-medium text-slate-700 w-full">{data}</h3>
    <p className="pb-4 small w-full">10 challenges</p>
    <div className="w-full mb-10">
      <ProgressBar  />
    </div>
  </div>

  {/* Floating Badge */}
  <span className="absolute bottom-3 bg-color1 py-1 px-2 rounded text-color6 right-4">
    3hr left
  </span>
</div>


      </>
    )
  }