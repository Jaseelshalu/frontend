import React, { useContext, useEffect, useState } from 'react'
import Button2 from '../subComponents/Button2'
import Chapter from '../subComponents/Chapter';
import Lesson from '../subComponents/Lesson';
import { useQuery } from '@tanstack/react-query';
import instance from '../Utilities/Axios';
import Cookies from 'js-cookie'
import { getChapters } from '../Utilities/Methods';
import Spinner from '../pages/Spinner';
import { levelDataContextProvider } from '../Utilities/SliderContext';
// import { data } from 'react-router-dom';

const Level = () => {
  const userId = Cookies.get('userId');
  // const [dataForLevel,setDataForLevel]=useState([])
  const {levelData,setLevelData}=useContext(levelDataContextProvider)

  const {data:chapterData,isLoading,isSuccess} =getChapters(userId)



  const levelDataManipulation = (levelData) => {
    const updatedData = levelData.reduce((acc, item, chapterIndex) => {
      let chapterObj = {
        ...item,
        chapterNo: chapterIndex + 1,
        type: 'chapter',
      };
  
      let lessonWithId = item.Lessons.reduce((lessonAcc, cur, lessonIndex) => {
        let lessonObj = {
          lessonNo: lessonIndex + 1,
          type: 'lesson',
          chapterNo: chapterIndex + 1,
          chapterName: item.Name,
          chapterId: item._id,
          ...cur,
        };
        return [...lessonAcc, lessonObj];
      }, []);
  
      return [...acc, chapterObj, ...lessonWithId];
    }, []);

       setLevelData(updatedData)
  };
  

    useEffect(()=>{
      if(isSuccess){
      levelDataManipulation(chapterData)
      console.log(isSuccess,chapterData,'df');
      }
    },[chapterData])

    let translateClass=[
      {transform:'translateX(0%)'},
      {transform: 'translateX(20%)'},
{      transform: 'translateX(80%)'},
{    transform: 'translateX(90%)'},
{    transform: 'translateX(50%)'},
{    transform: 'translateX(-10%)'},
{    transform: 'translateX(-40%)'},
{    transform: 'translateX(-70%)'},

    ]
  
  return (
    <div className='flex flex-col justify-center items-center gap-8 level'>
  {isLoading ? (
  <Spinner />
) : (
  levelData.map((item, index) => {
    const cssClass = translateClass[index % translateClass.length]; // Use a valid variable name

    if (item.type === 'chapter') {
      return <Chapter data={item} key={index} css={cssClass} />;
    } else {
      return <Lesson data={item} key={index}  css={cssClass} />;
    }
  })
)}
       
     </div>
  )
}

export default Level

