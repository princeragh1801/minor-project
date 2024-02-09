import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import About from "./About/About";
import Comment from './Comment/Comment'

function ProjectDetail() {
  const [page, setPage] = useState(0)

  const renderPage = [
    {
      loadPage : <About/>,
      path : 'about',
    },
    {
      loadPage : <Comment/>,
      path : 'comment',
    },
    
    
  ]
  return (
<>
  <div className="pt-8 ">
    <div className="mx-10 flex items-center justify-around ">
      <button onClick={()=> setPage(0)}>About</button>
      <button onClick={() => setPage(1)}>Comment</button>
 
    </div>
  </div>
  <hr className="pt-5" />
  {renderPage[page].loadPage}
</>
  );
}
export default ProjectDetail;








{/* <ol className="flex items-center justify-between w-[50%]  overflow-hidden font-semibold ">
  <Link to="/about">
    
    </Link> */}
      {/* <Link to='/comment'>
    <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
      <a className="capitalize text-lg hover:border-b-2 border-green-600" href="#">
        Comment
      </a>
    </li>
    </Link> */}

      {/* <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
      <a className="capitalize text-lg hover:border-b-2 border-green-600" href="#">
      Updates
      </a>
    </li>
    <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
      <a className="capitalize text-lg hover:border-b-2 border-green-600" href="#">
      Team
      </a>
    </li> */}
      {/* </ol> */}