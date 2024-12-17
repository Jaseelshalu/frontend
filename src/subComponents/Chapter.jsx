import React from 'react'
import { useNavigate } from 'react-router-dom'

const Chapter = ({data,css}) => {
  console.log(css);
  
  
  const navigate=useNavigate()
    function handleLesson(){
      if(data.isUnlocked)
        navigate(`quiz/${data._id}`,{state:{type:'chapter',}})
      
    }
  
  return (
       <div className="bg-color6  flex items-center max-w-max justify-center text-center py-4 px-4 rounded-3xl " style={css} onClick={handleLesson}>
          <div className="bg-color1  text-center items-center justify-center py-2 px-4 text-color6 rounded-3xl"> 
            <div className="icon"></div>
            <div className="info">{data.Name}</div>
          </div>
          </div>
  )
}

export default Chapter