import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from "js-cookie";


export const AuthContextProvider=createContext()
const AuthContext = ({children}) => {
    const [isLogin,setIsLogin]=useState(false)
    const navigate=useNavigate()
    const userCookie=Cookies.get('userId')

    useEffect(()=>{
      if(isLogin||userCookie){
        navigate('/')
      }else{
        navigate('/login')
      }
    },[isLogin,userCookie])

  return (
    <div>
        <AuthContextProvider.Provider value={{isLogin,setIsLogin}}>
             {children}
        </AuthContextProvider.Provider>
    </div>
  )
}

export default AuthContext