import React from 'react'
import ProjectPreviewCard from '../../components/ProjectPreviewCard'
import Checkbox from '../Home/CheckBox'
function Contact() {

  return (
    <section className="w-full">
      <div className="w-auto px-2 py-10">
        <div className="">
          <div>
            <h1 className="text-xl font-bold">Products</h1>
          </div>

        </div>
        <hr className="my-8" />
        <div className="flex">
          <div className=" w-[200px] mx-10 border-2">
            <div className="pt-6">
              <Checkbox heading="Technology" item1={"Web devlopment"} item2={"App Devlopment"} item3={"Flutter"} />
            </div>
            <div className="pt-6">
              <Checkbox heading="Technology Stack " item1={"HTML"} item2={"JAVA"} item3={"REACT"} />
            </div>
            <div className="pt-6">
              <Checkbox heading="Project Type" item1={"Software"} item2={"Hardware"} item3={"Simple"} />
            </div>
            <div className="pt-6">
              <Checkbox heading="Project Type" item1={"Software"} item2={"Hardware"} item3={"Simple"} />
            </div>
            <div className="pt-6">
              <Checkbox heading="Project Type" item1={"Software"} item2={"Hardware"} item3={"Simple"} />
            </div>
          </div>
          <div className="ml-10 w-full border-2">
            <div className='flex flex-wrap'>
              <ProjectPreviewCard />
              <ProjectPreviewCard />
              <ProjectPreviewCard />
              <ProjectPreviewCard />
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Contact
