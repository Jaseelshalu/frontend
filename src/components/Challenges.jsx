import React, { useEffect, useState } from "react"
import Glide from "@glidejs/glide"
import CardIcon from "../subComponents/CardIcon"
import instance from "../Utilities/Axios"
import Modal from "./Modal"
import Popup from "./Popup"
import { useNavigate } from "react-router-dom"
import { all } from "axios"

export default function Challenges() {

  const [daily,setDaily]=useState([])
  const [weekly,setWeekly]=useState([])
  const [monthly,setMonthle]=useState([])
  const [is,setIs]=useState(false)
  const [data,setData]=useState([])
  const navigate=useNavigate()

  useEffect(() => {
    const slider = new Glide(".glide-01", {
      type: "carousel",
      focusAt: "center",
      perView: 2,
      autoplay: 3000,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 1,
        },
        640: {
          perView: 1,
        },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  useEffect(()=>{
    async function fetchData(){
      try{
        const resDaily=await instance('notifications/challenges/daily')
        const resWeekly=await instance('notifications/challenges/weekly')
        const resMonthly=await instance('notifications/challenges/monthly')

        setDaily(resDaily.data)
        setMonthle(resMonthly.data)
        setWeekly(resWeekly.data)
       let allChallenges=[{type:'daily',...resDaily.data},{type:'weekly',...resMonthly.data},{type:'monthly',...resWeekly.data}]
       setData(allChallenges)
      
        console.log(allChallenges,'challenges');
      }catch (err){
        console.log(err);
        
      }
    }
    fetchData()

    },[])
   
  
  return (
    <>
    {/* <Modal/> */}
      {/*<!-- Component: Carousel with controls inside --> */}
      <div className="glide-01 relative w-full mt-8">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
          {  ['weekly','monthly','daily'].map((item)=>(
  <li >
  <CardIcon data={item}/>
 </li>

          ))
          
           }
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
          data-glide-el="controls"
        >
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.0.2/glide.js"></script>
      {/*<!-- End Carousel with controls inside --> */}
    </>
  )
}