import React from 'react'
import AddDescriptionEditor from './AddDescriptionEditor'
function AddProject() {
  return (
    <div className='mx-[20vw] my-10 '>
        <h1 className='font-bold text-2xl text-center mb-10'>Add Project</h1>
        <h1 className='font-bold text-lg mb-4'>Add some description in the Editor</h1>
      <AddDescriptionEditor/>
    </div>
  )
}

export default AddProject
