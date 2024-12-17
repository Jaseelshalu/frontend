import React from 'react'

const  Button = ({click,bg}) => {
  let buttonClass=`px-6 w-full py-2 font-medium rounded-full tracking-wide text-white capitalize transition-colors duration-300 transform bg-${bg}  hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80`
  return (
<button onClick={click} className={buttonClass}>
    Primary
</button>  
)
}

export default Button