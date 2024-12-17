import React from 'react'
import MainSection from '../components/MainSection'
import Challenges from '../components/Challenges'
import AdSection from '../components/AdSection'
import LastSection from '../components/LastSection'
import Spinner from './Spinner'
import Modal from '../components/Modal'

const Home = () => {
  return (
    <div className='container'>
      <MainSection/>
      <AdSection/>
      <LastSection/>
      {/* <Spinner/> */}
      
      
    </div>
  )
}

export default Home