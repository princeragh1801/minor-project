import React from 'react'
import RTE from './RTE'
import Input from '../../Input'
import ImageUpload from './ImageUpload'
import Button from '../../Button'
function AddProject() {
  return (
  <>
    <div className="flex flex-col justify-center items-center">
    <div className=' my-10 '>
        <h1 className='font-bold text-2xl text-center mb-10'>Add Project</h1>
    </div>

      {/* Two containers */}
      <div className="flex justify-center">
        {/* Left Container */}
        <div className="w-auto mx-20 p-4 ">
          <Input label = "Title" placeholder = "Enter title"  />
          <Input label = "Description " placeholder = "Enter description"  />
          <ImageUpload/>
          <Input type = "file" label = "Upload File" />
          </div>

        {/* Right Container */}
        <div className="w-1/2 p-4">
          <h2 className="text-xl font-semibold mb-2">Add Project OverView</h2>
          <RTE/>
        </div>
      </div>
      <Button title={"Upload Project"} className='bg-green-500 text-white' />
    </div>
  </>
    
  )
}

export default AddProject
