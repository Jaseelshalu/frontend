import React from 'react'

const Pagination = ({click}) => {
    
    return (
        <div class="flex mt-3 overflow-x-auto overflow-y-hidden border-b !text-color1 bg-color4 rounded-full border-gray-200 whitespace-nowrap dark:border-gray-700">
            <button onClick={click} class="inline-flex justify-center items-center grow h-10 px-2 py-2 -mb-px text-center text-color6  bg-color1 border-b-2 border-color1 sm:px-4 -px-1 rounded-full whitespace-nowrap focus:outline-none">
              
                <span class="mx-1 text-sm sm:text-base">
                    Home
                </span>
            </button>

            <button onClick={click} class="inline-flex grow justify-center items-center h-10 px-2 py-2 -mb-px text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:px-4 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">
               

                <span class="mx-1 text-sm sm:text-base">
                    Game Level
                </span>
            </button>

            
           

            {/* <button class="inline-flex grow justify-center items-center h-10 px-2 py-2 -mb-px text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:px-4 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mx-1 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>

                <span class="mx-1 text-sm sm:text-base">
                    Notification
                </span>
            </button> */}
        </div>)
}

export default Pagination