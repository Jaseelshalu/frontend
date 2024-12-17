import React, { useEffect } from 'react'
import Challenges from './Challenges'
import ProgressBar from '../subComponents/ProgressBar'
import RoundProgress from '../subComponents/RoundProgress'
import Pagination from './Pagination'
import Button from '../subComponents/Button'
import { useRef } from 'react'
import AdSection from './AdSection'
import Level from './Level'
import CircularProgress from '../subComponents/RoundProgress'
import Spinner from '../pages/Spinner'
import instance from '../Utilities/Axios'

const MainSection = () => {
    const homeRef=useRef(null)
    const homeRef1=useRef(null)
    const handleHome=()=>{
        // console.log(homeRef.current);
        
        if(homeRef.current)
          homeRef.current.classList.toggle('hidden')
        homeRef1.current.classList.toggle('hidden')
        console.log('hi');
    
      }
      useEffect(()=>{
       async function fetchReward(){
           const gem= await instance.get('rewards/total-gems')
        }
        fetchReward()
      },[])
      
    
    return (
        <>
    <div className="pagination flex items-center gap-4 pt-6 justify-center lg:hidden"> 
    <div className="daily-tip shrink-0" >
            <Button/>
        </div>
        <div className="pagination-div grow">
        <Pagination click={handleHome} />

        </div>
        
    </div>
        <div  className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 ">
            <div ref={homeRef1} className="bg-color5 py-8 px-5 md:col-span-2 shadow-[4px 4px 31.9px rgba(0, 0, 0, 0.27)] rounded-[40px]">

                <div className="main  gap-6 md:flex-row md:flex w-full bg-color5 lg:col-span-2   rounded-xl">
                    <div className="bg-linear1 rounded-[25px] text-white p-4 shrink-1 px-4 grow md:rounded-[40px] flex flex-col justify-center  " >
                        <h1 className="h2">Al-Jouhar</h1>
                        <p className='max-w-[]	'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolores deserunt, </p>
                        <div className="w-full lg:hidden mt-5">
                            <ProgressBar/>
                        </div>

                    </div>
                    <div className="hidden lg:block">
                    <div className="bg-color6  flex items-center justify-center     h-[200px] shrink-0  w-[200px] rounded-full text-color1">
                      <CircularProgress percentage={35}/>
                     </div>
                     </div>

                </div>

                <h2 className='h2 mt-12'>challenges</h2>
              {/* <Pagination/> */}
             <Challenges/>

            </div>


            <div ref={homeRef} className="main max-h-[500px]  hidden md:block relative md:max-h-[650px] shadow-[0px 4px 138px rgba(0, 0, 0, 0.4)]   bg-linear2 lg:col-span-1 py-5 px-5 rounded-[30px] overflow-auto">
                <Level/>
                {/* <Spinner/> */}
                            </div>
        </div>
        </>
    )
}

export default MainSection

/* Subtract */
