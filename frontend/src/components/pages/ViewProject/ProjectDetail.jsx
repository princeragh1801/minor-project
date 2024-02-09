import React from "react";
import { Link} from "react-router-dom";
import AboutProject from "./AboutProject/AboutPro";


function ProjectDetail(){
    return (
<div class="">
<div class="pt-8 ">
    <div class="flex items-center justify-center ">
      <ol class="flex items-center justify-between w-[50%]  overflow-hidden font-semibold ">
      <Link to="/about-project">
        <li class="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
          <a href="#" className="text-lg hover:border-b-2 border-green-600">About project</a>
        </li>
        </Link>
        <Link to='/comment'>
        <li class="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
          <a class="capitalize text-lg hover:border-b-2 border-green-600" href="#">
            Comment
          </a>
        </li>
        </Link>
        
        <li class="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
          <a class="capitalize text-lg hover:border-b-2 border-green-600" href="#">
           Updates
          </a>
        </li>
        <li class="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
          <a class="capitalize text-lg hover:border-b-2 border-green-600" href="#">
           Team
          </a>
        </li>
      </ol>
    </div>
  </div>
  <hr className="pt-5"/>
  <div class="pt-10  flex items-center justify-center w-[100%]">
   
  </div>
</div>

    );
}
export default ProjectDetail;