import React ,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import instance from '../Utilities/Axios'
import CardIcon from '../subComponents/CardIcon'
import CardIcon2 from '../subComponents/CardIcon2'
const Popup = () => {
  const {id}=useParams()
  console.log(id);

  const [daily,setDaily]=useState([])
  const [weekly,setWeekly]=useState([])
  const [monthly,setMonthle]=useState([])
  const [data,setData]=useState([])

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
    <div className='absolute top-0 bottom-0 left-0 w-full ring-0 z-[9990] flex items-center justify-center '>
        <div className="max-w-[700px] h-[500px] w-full bg-color6 ">
            <h1 className='h1 text-center'>{id} challenges</h1>
            <div className="flex flex-wrap items-center">
   

{/* {
  id === 'weekly' ? (
    weekly.map((item) => (
      <CardIcon2 data={item} key={item.id} />
    ))
  ) : id === 'monthly' ? (
    monthly.map((item) => (
      <CardIcon2 data={item} key={item.id} />
    ))
  ) : id === 'daily' ? (
    daily.map((item) => (
      <CardIcon2 data={item} key={item.id} />
    ))
  ) : null
} */}
            </div>
        </div>
    </div>
  )
}

export default Popup