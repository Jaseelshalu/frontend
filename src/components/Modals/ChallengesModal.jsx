import React from 'react'

const ChallengesModal = ({data,setModalOpen,handleLesson,modal}) => {
  return (
<div
    ref={modal}
    onFocus={() => setModalOpen(true)}
    onBlur={() => setModalOpen(false)}
    className="w-full max-w-[570px] rounded-[20px] bg-white px-8 py-12 text-center dark:bg-dark-2 md:px-[70px] md:py-[60px]"
  >
    <h3 className="pb-[18px] text-xl text-color1 font-semibold  sm:text-2xl">
      Challenges    </h3>
    <span
      className={`mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-primary`}
    ></span>
    <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since
    </p>
    <div className="-mx-3 flex flex-wrap">
      <div className="w-1/2 px-3">
        <button
          onClick={handleLesson}
          className="block w-full rounded-md border  bg-color1 border-stroke p-3 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white dark:text-white"
        >
          start
        </button>
      </div>
      <div className="w-1/2 px-3">
      <button
          onClick={() => setModalOpen(false)}
          className="block w-full rounded-md border  bg-color1 border-stroke p-3 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white dark:text-white"
        >
          Cancel
        </button>            
          </div>
    </div>
  </div>  )
}

export default ChallengesModal