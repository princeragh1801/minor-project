import React from "react";
import ProjectPreviewCard from "./ProjectPreviewCard";

function ViewProjects({ title, projects = []}) {
  return (
    <div className="p-4 border-2 border-gray border-t-0 ">
      <h2 className="text-xl font-bold ml-4 mb-2">{title}</h2>
      <div className="flex flex-wrap">
        {projects.map((project) => (<ProjectPreviewCard key={project._id} project={project} />))}
      </div>
    </div>
  );
}

export default ViewProjects;
