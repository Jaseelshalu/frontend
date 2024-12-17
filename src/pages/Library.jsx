import React from 'react'
import LibraryCard from '../components/LibraryCard'

const Library = () => {
  return (
    <div className="bg-color5">

    <div className=' container pt-8 pb-20'>
          <div className="h1 text-center">Library</div>
           <div className="flex flex-wrap gap-6 justify-center pt-8 ">
            <LibraryCard/>
            <LibraryCard/>
            <LibraryCard/>
            <LibraryCard/>
            <LibraryCard/>
            <LibraryCard/>
           </div>

    </div>
          
    </div>
  )
}

export default Library