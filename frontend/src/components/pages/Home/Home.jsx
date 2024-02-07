import React from 'react'
import ProjectPreviewCard from '../../ProjectPreviewCard'
import Input from '../../Input'
function Home() {
  return (
    <div className="my-4 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <div className="mb-4">
        <Input placeholder = "Search..." />
      </div>
      
      {/* Horizontal row */}
      <hr className="w-full border-t border-gray-300 mb-4" />

      {/* Two containers */}
      <div className="flex">
        {/* Left Container */}
        <div className="w-1/3 p-4 mx-4">
          <h2 className="text-xl font-bold mb-2">Filters</h2>
          
        </div>

        {/* Right Container */}
        <div className='m-4'>
        <h2 className="text-xl font-bold mb-2">Featured Projects</h2>
        <div className="flex flex-wrap">
        
          <ProjectPreviewCard/>
          <ProjectPreviewCard/>
          <ProjectPreviewCard/>
          <ProjectPreviewCard/>
          <ProjectPreviewCard/>
          <ProjectPreviewCard/>
          <ProjectPreviewCard/>
        </div>
        </div>
        
      </div>
    </div>
  
  )
}

export default Home
