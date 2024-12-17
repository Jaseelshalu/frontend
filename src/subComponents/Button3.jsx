import React from 'react'

const Button3 = ({text,fn,disabled}) => {
    function handleButton(){
        if(fn){
            fn(pre=>pre+1)
        }
    }
  return (
<button onClick={handleButton}  disabled={disabled} className= {`px-10 rounded-xl font-bold border-color1 border-solid border-2  py-3 
${
    disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-color4 hover:bg-color5'
  }`
}>{text}</button> 
 )
}

export default Button3

