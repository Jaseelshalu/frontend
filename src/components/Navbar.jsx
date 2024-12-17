import React, { useContext, useState,useEffect } from 'react'
import gem from '../assets/gem.svg'
import { IoNotificationsOutline } from "react-icons/io5";
import Cookies from 'js-cookie'
import {AuthContextProvider} from '../Utilities/AuthContext';
import instance from '../Utilities/Axios';
const Navbar = () => {
  const [gem,setGem]=useState(null)
  const {setIsLogin}=useContext(AuthContextProvider)
  const Logout=()=>{
    console.log('hi');
    
    Cookies.remove('userId')
    setIsLogin(false)
  }
  useEffect(()=>{
    async function fetchReward(){
        const gems= await instance.get('rewards/total-gems')
        setGem(gems)
     }
     fetchReward()
   },[])
   
  return (


    <nav class=" border-gray-200 container">
      <div class=" flex  items-center justify-between  p-4">
        <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Hadi</span>
        </a>

        <div class="" id="navbar-default">
          <ul class="font-medium flex items-center gap-2 md:4">
            <div class="gem bg-color1 px-0 pl-2  rounded-[25px] gap-1 text-black text-center flex items-center h-[25px] md:pl-3 md:h-10 md:gap-2justify-between">
              <span class="font-semibold text-white leading-[0.6]"></span>
              <div class="img bg-[#51513c] w-[25px] h-[25px] md:w-[37px] md:h-[37px]  pl-1 rounded-full flex items-center justify-center">
                <img src={gem} alt="" class="w-[30px]" />
              </div>
            </div>

            <div class="gem bg-color1 px-0 pl-2  rounded-[25px] gap-1 text-black text-center flex items-center h-[25px] md:pl-3 md:h-10 md:gap-2justify-between">
              <span class="font-semibold text-white leading-[0.6]">48</span>
              <div class="img bg-[#51513c] w-[25px] h-[25px] md:w-[37px] md:h-[37px]  pl-1 rounded-full flex items-center justify-center">
                <img src={gem} alt="" class="w-[30px] " />
              </div>
            </div>
            <div className="text-[30px] md:text-[35px]">
              <IoNotificationsOutline/>
            </div>
            <img class="object-cover w-6 h-6 md:w-10 md:h-10 rounded-full ring ring-gray-300 dark:ring-gray-600" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100" alt=""/>
        
           <button onClick={Logout}>logout</button>


          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar