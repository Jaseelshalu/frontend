import React, { useEffect, useState } from 'react'
import TopUsers from './TopUsers'
import instance from '../Utilities/Axios'

const AdSection = () => {

  const [data,setData]=useState([])
  useEffect(()=>{
    async function fetchData(){
      const res=await instance.get('rewards/leaderboard')
      console.log(res.data,'leaderboard');
      setData(data)
      
    }
    fetchData()
  },[])
  return (
    <div className='grid lg:grid-cols-5 mt-5  ' >
       <div className="col-span-2 lg:col-span-1">
        {/* <h2>leaderBoard</h2> */}
       </div>

       <div className="col-start-1 col-end-6 rounded-[30px] gap-4 md:col-start- md:col-end-8  lg:col-start-3 lg:col-end-6 flex flex-col  md:flex md:flex-row justify-center    bg-color5 p-5">
        <div className="h-full min-h-[310px]  lg:basis-1/2 flex  flex-col ">
        <div className="">
        <h2 className='h2  text-center font-extrabold text-3xl pt-4'>leaderBoard</h2>

            <p className='p-small mt-1 mb-4 text-center'>The more claps you get, the greater 
             the championships..</p>
        </div>
         <div className="h-full flex gap-4 items-end mb-6  justify-center ">
            <div className="h-[70%]  flex justify-center  w-14 rounded-t-full bg-linear3 relative"> 
            <img class="object-cover top-3  absolute w-6 h-6 md:w-8 md:h-8 rounded-full ring ring-gray-300 dark:ring-gray-600" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100" alt=""/>
            <div className="h1 absolute bottom-1 text-color6">3</div>
            </div>
            <div className="h-[100%]  flex justify-center  w-14 rounded-t-full bg-linear3 relative"> 
            <img class="object-cover top-3  absolute w-6 h-6 md:w-8 md:h-8 rounded-full ring ring-gray-300 dark:ring-gray-600" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100" alt=""/>
            <div className="h1 absolute bottom-1 text-color6">1</div>
            </div>
            <div className="h-[90%]  flex justify-center  w-14 rounded-t-full bg-linear3 relative"> 
            <img class="object-cover top-3  absolute w-6 h-6 md:w-8 md:h-8 rounded-full ring ring-gray-300 dark:ring-gray-600" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100" alt=""/>
            <div className="h1 absolute bottom-1 text-color6">2</div>
            </div>
        
         </div>

         <button className='self-end pr-4 hidden md:block lg:hidden'>view toppers</button>
         
        </div>
        <div className="w-full basis-1/2 md:hidden lg:block ">
           <TopUsers data={data}/>
        </div>

       </div>
    </div>
  )
}

export default AdSection

