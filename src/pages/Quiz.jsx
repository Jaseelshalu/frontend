import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { levelDataContextProvider } from '../Utilities/SliderContext';
import { ModalContaxtProvider } from '../Utilities/ModalContext';
import QuizType2 from '../components/QuizTypes/QuizType2';
import { RxCross1 } from "react-icons/rx";
import { useQueryClient } from '@tanstack/react-query';
import Modal from '../components/Modal';
import Spinner from './Spinner';
import instance from '../Utilities/Axios';
import QuizType3 from '../components/QuizTypes/QuizType3';
import Points from '../components/QuizTypes/Points';
import Match from '../components/QuizTypes/Match';
import TimeLine from '../components/QuizTypes/TimeLine';
import Yt from '../components/QuizTypes/Yt';
import Chapters from '../components/QuizTypes/Chapters';

const Quiz = () => {
  const { id } = useParams();
  const { levelData, setLeveldata } = useContext(levelDataContextProvider)
  const { modalOpen, setModalOpen } = useContext(ModalContaxtProvider);
  const navigate = useNavigate();
  const location = useLocation();
  const { type } = location.state || {};
  const queryClient = useQueryClient();

  const [slide, setSlide] = useState([])
  const [lessonData, setLessonData] = useState([]);
  const [result, setResult] = useState(0)
  const [end, setEnd] = useState(false)
  const [index, setIndex] = useState(0);
  const [sorted, setSorted] = useState([]);
  const [nextId, setNextId] = useState(null);
  const [currentId, setCurrentId] = useState(null)
  const [lessonIds, setLessonIds] = useState([]);
  const [chapterIds, setChapterIds] = useState([]);
  const [isQuestionReady, setIsQuestionReady] = useState(false);

  const [cache, setCache] = useState([])

console.log(type,'typee');


  useEffect(() => {

    const fetchMulti = async (chap, lessonId) => {
      try {
        const lesson = await instance(`home/lesson/${lessonId}`)
        const chapter = await instance(`home/chapter/${chap}`)
        let response = [chapter.data]
        let obj = {
          ...chapter.data,
          type: 'chapter'
        }
        setSlide((prev) => [...prev, ...obj]);
        setLessonData(lesson.data)
        console.log(chapter.data, 'lesson da', lesson.data);

        return response
      } catch (err) {
        console.log(err);

      }
    }

    const fetchLesson = async (id) => {
      const response = await instance(`home/lesson/${id}`);
      console.log('Lesson Data:', response.data);
      setLessonData(response.data);
    };

    const fetchData = async () => {
      if (type === 'lesson' && id) {
        // Fetch lesson data
        console.log('lesson start');
        
        await fetchLesson(id);
      } else if (type === 'chapter' && levelData.length > 0 && id) {
        console.log('CHAPTER');
        
        const currentIndex = levelData.findIndex((obj) => obj.id === id);

        // Ensure the currentIndex is valid
        if (currentIndex !== -1) {
          let curr = levelData[currentIndex];
          let nextLesson = levelData[currentIndex + 1];

          // Ensure nextLesson exists before fetching
          if (nextLesson) {
            await fetchMulti(curr.id, nextLesson.id);
          } else {
            console.log('No next lesson found.');
          }
        } else {
          console.log('Current index not found in sorted array.');
        }
      }
    };

    fetchData();
    console.log(type,'fsa');
    
  }, [levelData, id,type]);

  useEffect(() => {
    console.log(levelData, 'setup');

    let sort = levelData.filter((item) => item._id === lessonData._id)
    console.log(sort, 'sort');



    if (lessonData.keyPoints?.length > 0) {
      let keyPoints = lessonData.keyPoints.map((item) => ({
        ...item,
        type: 'points',
        lessonNo: sort[0].lessonNo,
        chapterNo: sort[0].chapterNo,
        chapterName: sort[0].chapterName,
        chapterTitle: sort[0].title

      }))
      console.log(keyPoints, 'keypoints');
      setSlide(pre => [...pre, ...keyPoints])

    }

    if (lessonData.task?.length > 0) {

      lessonData.task.forEach((item) => {
        if (item.type === 'Match') {
          let obj = {
            type: 'Match',
            body: item.body,
            lessonNo: sort[0].lessonNo,
            chapterNo: sort[0].chapterNo,
            chapterName: sort[0].chapterName,
            lessonTitle: sort[0].title
          }
          setSlide(pre => [...pre, obj])
        }
        else if (item.type === 'youtube') {
          let obj = {
            type: 'youtube',
            body: item.body[0],
            lessonNo: sort[0].lessonNo,
            chapterNo: sort[0].chapterNo,
            chapterName: sort[0].chapterName,
            lessonTitle: sort[0].title
          }
          setSlide(pre => [...pre, obj])
        } else if (item.type === 'Timeline') {
          let obj = {
            type: 'Timeline',
            body: item.body,
            lessonNo: sort[0].lessonNo,
            chapterNo: sort[0].chapterNo,
            chapterName: sort[0].chapterName,
            lessonTitle: sort[0].title
          }
          setSlide(pre => [...pre, obj])
        }
      })

    }
  }, [lessonData])

  useEffect(() => {

  }, [index])
  useEffect(() => {
    console.log("useEffect triggered");
    console.log("Slides:", slide);
    console.log("Index:", index);
  
    if (slide.length > 0 && index < slide.length) {
      setIsQuestionReady(true);
      setModalOpen(false);
      console.log("Question Ready, Modal Closed");
    } else if (index === slide.length) {
      console.log("All Slides Completed");
  
      const currentIndex = levelData.findIndex((obj) => obj._id === id);
      const curr = levelData[currentIndex];

      console.log(currentIndex, curr, "Current Index in Level Data");
  
      if (currentIndex !== -1) {
        const curr = levelData[currentIndex];
        const nextLesson = levelData[currentIndex + 1] || null;
  
        console.log("Current Lesson:", curr);
        console.log("Next Lesson:", nextLesson);
  
        setNextId(nextLesson || null); // Handle nextLesson being null
        setCurrentId(curr);
      } else {
        console.error("ID not found in Level Data");
      }
  
      setModalOpen(true);
      setIsQuestionReady(false);
    }
  }, [slide, index, levelData, id]);
  
  const array = [
    ['apple', 'banana', 'cherry', 'date', 'elderberry'],  // First sub-array with 5 text values
    ['fig', 'grape', 'honeydew', 'kiwi', 'lemon']         // Second sub-array with 5 text values
  ];
  
  return (
    <>
      {!isQuestionReady ? (
        !nextId? (
          <Spinner />
        ) : (
          <Modal type='quiz' nextId={nextId} currId={currentId} />
        
        )
      ) : (
        <div className="h-screen flex items-center absolute top-0 bottom-0 left-0 right-0 bg-color5">
      
          <i className="absolute top-8 left-8 text-2xl">
            <RxCross1 />
          </i>
  
          <div className="container">
            {slide[index]?.type === 'points' ? (
              <Points data={slide[index]} setIndex={setIndex} />
            ) : slide[index]?.type==='Match'? (
              <Match
              body={slide[index].body}
               setIndex={setIndex}
              />
            ):slide[index]?.type==='Timeline'? (
              <TimeLine data={slide[index]} setIndex={setIndex}/>
            ):slide[index]?.type==='youtube'? (
              <Yt data={slide[index]}/>
            ):slide[index]?.type==='chapter'? (
              <Chapters />
            ):
            (
              'hkjasd'
            )}
          </div>
        </div>
      )}
   
    </>
  );
}
export default Quiz  

      {/* <Match body={array} /> */}
