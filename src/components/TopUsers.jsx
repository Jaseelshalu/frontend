import React, { useEffect, useState } from 'react';
import instance from '../Utilities/Axios';

const TopUsers = () => {
  const [data,setData]=useState([])

  useEffect(()=>{
    async function fetchData(){
      const res=await instance.get('rewards/leaderboard')
      console.log(res.data,'leaderboard');
      setData(res.data)
      
    }
    fetchData()
  },[])  

  return (
    <>
    
    {data&&
    <div className="bg-white py shadow-md rounded-[30px] p-4  ">
      <h2 className="text-xl font-semibold mb-4">Top Users</h2>
      <ul className='w-full'>
        {data.map((item)=>(
  <li className="flex items-center justify-between py-2 border-b border-gray-300">
  <div className="flex items-center">
    <span className="text-lg font-semibold mr-4">1</span>
    <img src="https://via.placeholder.com/48" alt="User Avatar" className="w-8 h-8 rounded-full mr-4" />
    <span className="text-gray-800 font-semibold">{item.username}</span>
  </div>
  <span className="text-green-500 font-semibold">{item.points}</span>
</li>
        ))}
      
        
      </ul>
    </div>}
    </>

  );
};

export default TopUsers;
