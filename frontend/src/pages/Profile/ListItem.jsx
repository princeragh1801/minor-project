import React from "react";
import { Link } from "react-router-dom";
function ListItem({ title, Icon, ...props }) {
  return (
    <Link>
      <div className="flex justify-start mb-4">
        <div className="mr-2 mt-1 text-green-500">{Icon}</div>
        <h3 className="font-bold text-md">{title}</h3>
      </div>
    </Link>
  );
}

export default ListItem;
