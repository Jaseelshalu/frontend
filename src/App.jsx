
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainSection from './components/MainSection'
import Navbar from './components/Navbar'
import './index.css'
import Home from './pages/Home'
import Routing from './components/Routing'
import ModalContext from './Utilities/ModalContext'
import Sidebar from './components/Sidebar'
import Popup from './components/Popup'
import { useEffect } from 'react'
import axios from 'axios'
import instance from './Utilities/Axios'
export default function App() {
  useEffect(()=>{
    async function initial(){
      const token =await instance.get('/auth/refresh-token')
    }
    initial()
  },[])
  return (
    <>
    <ModalContext>
      <Navbar/>
      <Sidebar/>
      <Routing/>
    </ModalContext>
    </>
    
  )
}


