import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Quiz from '../pages/Quiz'
import SliderContext from '../Utilities/SliderContext'
import Library from '../pages/Library'
import ChatInterface from '../pages/Community'
import Modal from './Modal'
import Quran from '../pages/Quran'
import Surah from '../pages/Surah'
import Popup from './Popup'


const Routing = () => {
  
  return (
    <div>

      <SliderContext>
        {/* <Modal/> */}
        <Routes>
            <Route exact  path='/' element={<Home/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='quiz/:id' element={<Quiz/>}/>
            <Route path='library' element={<Library/>}/>
            <Route path='community' element={<ChatInterface/>}/>
            <Route path='quran' element={<Quran/>}/>
            <Route path='quran/:id' element={<Surah/>}/>
            <Route path='challenges/:id' element={<Popup/>}/>
           

        </Routes>
        </SliderContext>


    </div>
  )
}

export default Routing