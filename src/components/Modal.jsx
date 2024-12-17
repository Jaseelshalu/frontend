import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { ModalContaxtProvider } from "../Utilities/ModalContext";
import Button4 from "../subComponents/Button4";
import { getChapters, makeCompleteLesson } from "../Utilities/Methods";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

const Modal = ({nextId,currId,result,lessons}) => {
   
  console.log(nextId,currId);


  const trigger = useRef(null);
  const modal = useRef(null);
  const {modalOpen, setModalOpen ,isLoading} = useContext(ModalContaxtProvider);
  const navigate=useNavigate()
  

  // close on click outside
  // useEffect(() => {
  //   const clickHandler = ({ target }) => {
  //     if (!modal.current) return;
  //     if (
  //       !modalOpen ||
  //       modal.current.contains(target) ||
  //       trigger.current.contains(target)
  //     )
  //       return;
  //     setModalOpen(false);
  //   };
  
  // });

  // close if the esc key is pressed
  // useEffect(() => {
  //   const keyHandler = ({ keyCode }) => {
  //     if (!modalOpen || keyCode !== 27) return;
  //     setModalOpen(false);
  //   };

  // });
  // if(nextId&&currId){
  const {mutate}= makeCompleteLesson(currId._id,currId.chapterId)
    
  // }
 

  const handleLesson = () => {
    console.log(nextId,'modal id');
    
    // mutate()
    console.log(nextId._id,'nextid',currId._id);
    
    navigate(`/quiz/${nextId._id}`,{
      state:{type:nextId.type}
    }  )
  
  };
    
  function handleQuit(){
    setModalOpen(false)
    navigate('/')
  }


  return (
    <>
      <div className="container mx-auto py-20 ">
        {/* <button
          ref={trigger}
          onClick={() => setModalOpen(true)}
          className={`rounded-full bg-primary px-6 py-3 text-base font-medium text-white`}
        >
          Open Modal
        </button> */}
        <div
          className={`fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-dark/90 px-4 py-5 ${
            modalOpen ? "block" : "hidden"
          }`}
        >
          <div
            ref={modal}
            onFocus={() => setModalOpen(true)}
            onBlur={() => setModalOpen(false)}
            className="w-full max-w-[570px] rounded-[20px] bg-white px-8 py-12 text-center dark:bg-dark-2 md:px-[70px] md:py-[60px]"
          >
            <h3 className="pb-[18px] text-xl text-color1 font-semibold  sm:text-2xl">
              Welcome
            </h3>
            <span
              className={`mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-primary`}
            ></span>
            <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
             Continue
            </p>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-1/2 px-3">
                <button
                  onClick={handleLesson}
                  className="block w-full rounded-md border  bg-color1 border-stroke p-3 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white dark:text-white"
                >
                  next
                </button>
              </div>
              <div className="w-1/2 px-3">
              <button
                  onClick={handleQuit}
                  className="block w-full rounded-md border  bg-color1 border-stroke p-3 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white dark:text-white"
                >
                  QUit
                </button>            
                  </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
