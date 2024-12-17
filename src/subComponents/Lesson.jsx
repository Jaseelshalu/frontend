import React from 'react'
import { CiLock } from "react-icons/ci";
import { CiUnlock } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';


const Lesson = ({data,css}) => {
  const navigate=useNavigate()
  
  function handleLesson(){
    if(data.isUnlocked)
      navigate(`quiz/${data._id}`,{state:{type:'lesson'}})
    
  }
  return (
        <div style={css} className="bg-color1 text-2xl flex items-center justify-center text-color6 w-[70px] h-[50px] text-center py-2 px-2 rounded-3xl" onClick={handleLesson}>
        <div className="icon">{data.isUnlocked?<CiUnlock/>:<CiLock />}
        </div>
      </div>
  )
}

export default Lesson