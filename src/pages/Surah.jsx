import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import instance from '../Utilities/Axios'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Surah = () => {
    const {id}=useParams()
    const [surah,setSurah]=useState([])

    useEffect(()=>{
        const base = "https://quranapi.pages.dev/api/"; // Add https:// to avoid issues
       async function fetchData(){
         let res=await axios(`${base}${id}.json`)
         console.log(res.data,'quram');
         setSurah(res.data)
       }
       fetchData()
      },[])
  return (
    <div>
        {surah&&
         <div className="container">
         <h1 className='text-center h1'>{surah.surahNameArabic}</h1>
         <div className="flex max-w-[100%] flex-wrap text-right" style={{ textAlign: "right", direction: "rtl", fontFamily: "Arial, sans-serif" }}>
        
           {surah?.arabic1?.map((item, index) => (
            <p key={index} className='text-lg' style={{ textAlign: "right", direction: "rtl", fontFamily: "Arial, sans-serif" }}>{item} <span className='w-[50px] h-[50px] rounded-full bg-color1'></span></p>
          ))}
        

         </div>
         </div>
        }
       
    </div>
  )
}

export default Surah