import React, { useContext,useState, useRef } from 'react'
import Button3 from '../../subComponents/Button3'
import Button from '../../subComponents/Button';

const QuizType2 = ({ question, setIndex,result,setResult }) => {
  const [selectedIndex, setSelectedIndex] = useState(null); // Track selected option index
  const [isCorrect, setIsCorrect] = useState(null); // Track correctness state
  const [isAnswered, setIsAnswered] = useState(false); // Track if an option has been selected

  const optionRefs = useRef([]); // Refs for each option
  
  const handleOptionClick = (selectedOption, index) => {
    if (isAnswered) return; // Prevent further clicks if already answered

    const correctAnswer = question.options[question.answer ]; // Get the correct answer

    setSelectedIndex(index); // Track selected option index
    setIsAnswered(true); // Mark as answered
    if (correctAnswer === selectedOption) {
      setIsCorrect(true); // Mark as correct
      setResult((prev) => prev + 1); // Update the score
    } else {
      setIsCorrect(false); // Mark as incorrect
    }
  };

  const handleNext = () => {
    // Reset states
    setSelectedIndex(null);
    setIsCorrect(null);
    setIsAnswered(false);
    // Call the function to load the next question
    setIndex((prevIndex) => prevIndex + 1);
  };
  return (
    <>
    <h1>nabhan</h1>
    </>
  //   <div>
  //     <div className="flex  gap-6">
  //     <p className='bg-color4 inline-block px-4 py-2 rounded-full font-semibold'>Islam/Lesson </p>
  //     <p className='bg-color4 inline-block px-4 py-2 rounded-full font-semibold'>Quiz Result: {result}</p>
       
  //     </div>
  //     <h1 className='h1 flex items-center '>{question?.question && question.question}</h1>
  //     <ul className=''>
  //       {question.options&& question.options.map((option, index) => (
  //   <li
  //   key={index}
  //   ref={(el) => (optionRefs.current[index] = el)} // Assign ref dynamically
  //   onClick={() => handleOptionClick(option, index)}
  //   className={`mt-4 block max-w-[600px] py-4 px-6 rounded-md text-xl 
  //     ${
  //       isAnswered && selectedIndex === index
  //         ? isCorrect
  //           ? 'bg-green-500'
  //           : 'bg-red-500'
  //         : isAnswered
  //         ? 'opacity-80 cursor-not-allowed' // Dim and disable unselected options
  //         : 'bg-color3'
  //     } 
  //     text-color6 hover:bg-color1 hover:translate-x-10 transition duration-500 hover:scale-105`}
  //   style={isAnswered ? { pointerEvents: 'none' } : {}} // Disable pointer events on all options after answering
  // >
  //   {option}
  // </li>
  //       ))
  //       }
  //     </ul>
  //     <div className="mt-8 self">
  //       <Button3 text={'Next'} 
  //       fn={handleNext}
  //       disabled={!isAnswered} // Disable button if no option is selected

  //       />
  //     </div>
  //   </div>
  )
}

export default QuizType2