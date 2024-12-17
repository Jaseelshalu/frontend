import React, { useEffect, useState } from 'react'
import instance from '../Utilities/Axios'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Quran = () => {
  const [surah,setSurah]=useState([])
  const navigate=useNavigate()
  useEffect(()=>{
    const base = "https://quranapi.pages.dev/api/"; // Add https:// to avoid issues
   async function fetchData(){
     let res=await axios(`${base}surah.json`)
     console.log(res.data[0],'quram');
     setSurah(res.data)
   }
   fetchData()
  },[])

  function handleSurah(e){
    console.log(e.target.innerHTML);
    
    let surahNo=surah.findIndex(obj=>obj.surahName===e.target.innerHTML)
    console.log(surahNo+1);
    navigate(`/quran/${surahNo}`)
    
  }
  return (
    <>
{surah&&
    <div className>
 
      <div className=" w-full ">
        <h1 className="h1 text-center text-color6 py-4">Quran</h1>
      </div>
      <div className="container">
        <div className="flex flex-wrap gap-4 ">

    {surah.map((item)=>(
      <div className="bg-color6 basis-[200px] flex-1 shadow-md p-4 rounded-lg" onClick={handleSurah}>
      {item.surahName}
    </div>
    ))}

        </div>
      
        </div>
       

    </div>
}
    </>

  )
}

export default Quran

 // Fetch lesson data
  // useEffect(() => {
  //   const fetchLesson = async (id) => {
  //     const response = await instance(`home/lesson/${id}`);
  //     console.log('Lesson Data:', response.data);
  //     setLessonData(response.data);
  //   };

  //   const fetchMulti = async (chap, lessonId) => {
  //     // console.log(chap, 'chap');

  //     try {


  //       const lesson = await instance(`home/lesson/${lessonId}`)
  //       const chapter = await instance(`home/chapter/${chap}`)

  //       let response = [chapter.data, lesson.data]
  //       let obj = {

  //         type: 'chapter'
  //       }
  //       console.log(chapter.data, 'onbjj');

  //       setSlide((prev) => [...prev, obj]);
  //       setLessonData(lesson.data)

  //       console.log(response);

  //       return response
  //     } catch (err) {
  //       console.log(err);

  //     }
  //   }



  //   if (type === 'lesson' && id) {
  //     fetchLesson(id);
  //   } else if (type === 'chapter' && id) {

  //     const currentIndex = sorted.findIndex((obj) => obj.id === id);
  //     console.log(currentIndex,'currentindex');
  //     console.log(sorted);

  //     if (currentIndex) {
  //       console.log(currentIndex,'cureee');
  //       const curr=sorted[currentIndex]
  //       console.log(curr);

  //       const next = sorted[currentIndex + 1]; // Get the next item in sorted
  //       console.log(sorted[currentIndex,next,'heloooooooooo']);


  //       fetchMulti(curr.id, next.id)
  //     }


  //   }
  // }, [id, type]);

  // // Update slides when lesson data is available
  // useEffect(() => {
  //   if (lessonData?.questions?.length > 0) {
  //     const slides = lessonData.questions.map((question) => ({
  //       ...question,
  //       title: lessonData.title,
  //       chapter: lessonData.chapterName,
  //       lessonNo: lessonData.chapterNo

  //     }));
  //     setSlide((prev) => [...prev, ...slides]);
  //     setIsQuestionReady(true);
  //   }else if(lessonData?.KeyPoints?.length>0){
  //     console.log(lessonData,'lesson');

  //     const slides = lessonData.KeyPoints.map((points) => ({
  //       ...question,
  //       title: lessonData.title,
  //       chapter: lessonData.chapterName,
  //       lessonNo: lessonData.chapterNo

  //     }));
  //     setSlide((prev) => [...prev, ...slides]);
  //     setIsQuestionReady(true);
  //   }
  // }, [lessonData]);

  // // Fetch and sort chapter and lesson data
  // // Fetch and sort chapter and lesson data
  // useEffect(() => {
  //   const fetchAndSort = async () => {
  //     try {
  //       const cache = await queryClient.getQueryData(['chapters']);
  //       console.log(cache, 'cache');

  //       if (!cache) throw new Error('No cached data found for chapters.');

  //       // Flatten the chapters and lessons and remove duplicates by checking ids
  //       const sortedData = cache.flatMap((item, chapterIndex) => [
  //         { id: item._id, type: 'chapter', chapterNo: chapterIndex + 1 },
  //         ...item.Lessons.map((lesson, lessonIndex) => ({
  //           id: lesson._id,
  //           chapterId: item._id,
  //           chapterNo: chapterIndex + 1,
  //           type: 'lesson',
  //           lessonNo: lessonIndex + 1,
  //         })),
  //       ]);

  //       // // Remove duplicates from sortedData based on 'id'
  //       // const uniqueSortedData = sortedData.filter((value, index, self) =>
  //       //   index === self.findIndex((t) => t.id === value.id)
  //       // );

  //       setSorted(sortedData);

  //       // Separate lesson and chapter IDs
  //       // const lessonIds = uniqueSortedData.filter((item) => item.type === 'lesson').map((item) => item.id);
  //       // const chapterIds = uniqueSortedData.filter((item) => item.type === 'chapter').map((item) => item.id);

  //       setLessonIds(lessonIds);
  //       setChapterIds(chapterIds);

  //       console.log('Lesson IDs:', lessonIds);
  //       console.log('Chapter IDs:', chapterIds);
  //     } catch (error) {
  //       console.error('Error fetching and sorting data:', error);
  //     }
  //   };

  //   fetchAndSort();
  // }, [queryClient]);


  // // Handle modal and next quiz
  // // Handle modal and next quiz
  // useEffect(() => {
  //   if (index === slide.length - 1) { // When we're one question away from the end
  //     const currentIndex = sorted.findIndex((obj) => obj.id === id);
  //     const currrItem = sorted[currentIndex]
  //     setCurrentId(currrItem)

  //     if(currentIndex===sorted.length-1){
  //     throw new console.error('sorted is over');


  //     }

  //     console.log('Current Index:', currentIndex);
  //     console.log('Sorted Length:', sorted);

  //     if (currentIndex >= 0) {
  //       if (currentIndex == sorted.length) {
  //         // Alert when the current element is the last in the sorted array
  //         alert('You have reached the last element of the quiz.');
  //         setEnd(true); // Optional: Set the end state
  //         setModalOpen(false); // Optional: Close the modal
  //       } else {
  //         // If there's a next item in sorted array
  //         const next = sorted[currentIndex + 1]; // Get the next item in sorted
  //         setNextId(next); // Set the nextId
  //         setModalOpen(true); // Open modal for next question
  //       }
  //     }
  //   }
  // }, [index, slide, sorted, id]);





  // const handleQuizPage = () => {
  //   navigate('/');
  //   setSlide([]);
  // };

  // console.log(slide[index], 'rergtergyerg');

  
// sorting cache
  //  useEffect(() => {
  //   const fetchAndSort = async () => {
  //     try {
  //       const cache = await queryClient.getQueryData(['chapters']);
  //       setCache(cache)
  //       if (!cache) throw new Error('No cached data found for chapters.');
  //      console.log(cache,'name');
       

  //       const sortedData = cache.flatMap((item, chapterIndex) => [
  //         { id: item._id, type: 'chapter', chapterNo: chapterIndex + 1 },
  //         ...item.Lessons.map((lesson, lessonIndex) => ({
  //           id: lesson._id,
  //           chapterId: item._id,
  //           chapterNo: chapterIndex + 1,
  //           type: 'lesson',
  //           title:lesson.title,
  //           chapterName:item.chaptername,
  //           lessonNo: lessonIndex + 1,
  //         })),
  //       ]);     
  //       setSorted(sortedData);
  //       console.log(sorted,'sortedddddd');
        

  //     } catch (error) {
  //       console.error('Error fetching and sorting data:', error);
  //     }
  //   };

  //   fetchAndSort();
  // }, [queryClient,id]);

// setuping slides



//  /* {!isQuestionReady ? (
//         <Spinner />
//       ) : (
//         <div className="h-screen flex items-center absolute top-0 bottom-0 left-0 right-0 bg-color5">
//           <i className="absolute top-8 left-8 text-2xl" onClick={handleQuizPage}>
//             <RxCross1 />
//           </i>
//           <div className="container">
//             {index === slide.length ? (
//               nextId ? (
//                 <Modal nextId={nextId} currId={currentId} result={result} lessons={lessonIds} chapters={sorted} />
//               ) : (
//                 <Modal />
//               )
//         //     ) : slide[index].type === 'chapter' ? <QuizType3 setIndex={setIndex} /> : (
//         //       <QuizType2 question={slide[index]} setIndex={setIndex} result={result} setResult={setResult} />
//         //     )}
//         //   </div>
//         // </div>
      








////////////////////////////////////////////////////////////////////

// import React, { useContext, useEffect, useState } from 'react';
// import { useLocation, useNavigate, useParams } from 'react-router-dom';
// import { levelDataContextProvider } from '../Utilities/SliderContext';
// import { ModalContaxtProvider } from '../Utilities/ModalContext';
// import QuizType2 from '../components/QuizTypes/QuizType2';
// import { RxCross1 } from "react-icons/rx";
// import { useQueryClient } from '@tanstack/react-query';
// import Modal from '../components/Modal';
// import Spinner from './Spinner';
// import instance from '../Utilities/Axios';
// import QuizType3 from '../components/QuizTypes/QuizType3';
// import Points from '../components/QuizTypes/Points';
// import Match from '../components/QuizTypes/Match';
// import TimeLine from '../components/QuizTypes/TimeLine';
// import Yt from '../components/QuizTypes/Yt';
// import Chapters from '../components/QuizTypes/Chapters';

// const Quiz = () => {
//   const { id } = useParams();
//   const { levelData, setLeveldata } = useContext(levelDataContextProvider)
//   const { modalOpen, setModalOpen } = useContext(ModalContaxtProvider);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { type } = location.state || {};
//   const queryClient = useQueryClient();

//   const [slide, setSlide] = useState([])
//   const [lessonData, setLessonData] = useState([]);
//   const [result, setResult] = useState(0)
//   const [end, setEnd] = useState(false)
//   const [index, setIndex] = useState(0);
//   const [sorted, setSorted] = useState([]);
//   const [nextId, setNextId] = useState(null);
//   const [currentId, setCurrentId] = useState(null)
//   const [lessonIds, setLessonIds] = useState([]);
//   const [chapterIds, setChapterIds] = useState([]);
//   const [isQuestionReady, setIsQuestionReady] = useState(false);

//   const [cache, setCache] = useState([])

// console.log(type,'typee');


//   useEffect(() => {

//     const fetchMulti = async (chap, lessonId) => {
//       try {
//         const lesson = await instance(`home/lesson/${lessonId}`)
//         const chapter = await instance(`home/chapter/${chap}`)
//         let response = [chapter.data]
//         let obj = {
//           ...chapter.data,
//           type: 'chapter'
//         }
//         setSlide((prev) => [...prev, ...obj]);
//         setLessonData(lesson.data)
//         console.log(chapter.data, 'lesson da', lesson.data);

//         return response
//       } catch (err) {
//         console.log(err);

//       }
//     }

//     const fetchLesson = async (id) => {
//       const response = await instance(`home/lesson/${id}`);
//       console.log('Lesson Data:', response.data);
//       setLessonData(response.data);
//     };

//     const fetchData = async () => {
//       if (type === 'lesson' && id) {
//         // Fetch lesson data
//         console.log('lesson start');
        
//         await fetchLesson(id);
//       } else if (type === 'chapter' && levelData.length > 0 && id) {
//         console.log('CHAPTER');
        
//         const currentIndex = levelData.findIndex((obj) => obj.id === id);

//         // Ensure the currentIndex is valid
//         if (currentIndex !== -1) {
//           let curr = levelData[currentIndex];
//           let nextLesson = levelData[currentIndex + 1];

//           // Ensure nextLesson exists before fetching
//           if (nextLesson) {
//             await fetchMulti(curr.id, nextLesson.id);
//           } else {
//             console.log('No next lesson found.');
//           }
//         } else {
//           console.log('Current index not found in sorted array.');
//         }
//       }
//     };

//     fetchData();
//     console.log(type,'fsa');
    
//   }, [levelData, id,type]);

//   useEffect(() => {
//     console.log(levelData, 'setup');

//     let sort = levelData.filter((item) => item._id === lessonData._id)
//     console.log(sort, 'sort');



//     if (lessonData.keyPoints?.length > 0) {
//       let keyPoints = lessonData.keyPoints.map((item) => ({
//         ...item,
//         type: 'points',
//         lessonNo: sort[0].lessonNo,
//         chapterNo: sort[0].chapterNo,
//         chapterName: sort[0].chapterName,
//         chapterTitle: sort[0].title

//       }))
//       console.log(keyPoints, 'keypoints');
//       setSlide(pre => [...pre, ...keyPoints])

//     }

//     if (lessonData.task?.length > 0) {

//       lessonData.task.forEach((item) => {
//         if (item.type === 'Match') {
//           let obj = {
//             type: 'Match',
//             body: item.body,
//             lessonNo: sort[0].lessonNo,
//             chapterNo: sort[0].chapterNo,
//             chapterName: sort[0].chapterName,
//             lessonTitle: sort[0].title
//           }
//           setSlide(pre => [...pre, obj])
//         }
//         else if (item.type === 'youtube') {
//           let obj = {
//             type: 'youtube',
//             body: item.body[0],
//             lessonNo: sort[0].lessonNo,
//             chapterNo: sort[0].chapterNo,
//             chapterName: sort[0].chapterName,
//             lessonTitle: sort[0].title
//           }
//           setSlide(pre => [...pre, obj])
//         } else if (item.type === 'Timeline') {
//           let obj = {
//             type: 'Timeline',
//             body: item.body,
//             lessonNo: sort[0].lessonNo,
//             chapterNo: sort[0].chapterNo,
//             chapterName: sort[0].chapterName,
//             lessonTitle: sort[0].title
//           }
//           setSlide(pre => [...pre, obj])
//         }
//       })

//     }
//   }, [lessonData])

//   useEffect(() => {

//   }, [index])
//   useEffect(() => {
//     console.log("useEffect triggered");
//     console.log("Slides:", slide);
//     console.log("Index:", index);
  
//     if (slide.length > 0 && index < slide.length) {
//       setIsQuestionReady(true);
//       setModalOpen(false);
//       console.log("Question Ready, Modal Closed");
//     } else if (index === slide.length) {
//       console.log("All Slides Completed");
  
//       const currentIndex = levelData.findIndex((obj) => obj._id === id);
//       const curr = levelData[currentIndex];

//       console.log(currentIndex, curr, "Current Index in Level Data");
  
//       if (currentIndex !== -1) {
//         const curr = levelData[currentIndex];
//         const nextLesson = levelData[currentIndex + 1] || null;
  
//         console.log("Current Lesson:", curr);
//         console.log("Next Lesson:", nextLesson);
  
//         setNextId(nextLesson || null); // Handle nextLesson being null
//         setCurrentId(curr);
//       } else {
//         console.error("ID not found in Level Data");
//       }
  
//       setModalOpen(true);
//       setIsQuestionReady(false);
//     }
//   }, [slide, index, levelData, id]);
  
//   const array = [
//     ['apple', 'banana', 'cherry', 'date', 'elderberry'],  // First sub-array with 5 text values
//     ['fig', 'grape', 'honeydew', 'kiwi', 'lemon']         // Second sub-array with 5 text values
//   ];
  
//   return (
//     <>
//       {!isQuestionReady ? (
//         !nextId? (
//           <Spinner />
//         ) : (
//           <Modal nextId={nextId} currId={currentId} />
        
//         )
//       ) : (
//         <div className="h-screen flex items-center absolute top-0 bottom-0 left-0 right-0 bg-color5">
      
//           <i className="absolute top-8 left-8 text-2xl">
//             <RxCross1 />
//           </i>
  
//           <div className="container">
//             {slide[index]?.type === 'points' ? (
//               <Points data={slide[index]} setIndex={setIndex} />
//             ) : slide[index]?.type==='Match'? (
//               <Match
//               body={slide[index].body}
//                setIndex={setIndex}
//               />
//             ):slide[index]?.type==='Timeline'? (
//               <TimeLine data={slide[index]} setIndex={setIndex}/>
//             ):slide[index]?.type==='youtube'? (
//               <Yt data={slide[index]}/>
//             ):slide[index]?.type==='chapter'? (
//               <Chapters />
//             ):
//             (
//               'hkjasd'
//             )}
//           </div>
//         </div>
//       )}
   
//     </>
//   );
// }
// export default Quiz  

//       {/* <Match body={array} /> */}
