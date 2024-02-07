import { RxDashboard } from "react-icons/rx";
import { RiProfileLine } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { MdOutlinePostAdd } from "react-icons/md";
import { RiProjectorLine } from "react-icons/ri";
import { FaComments } from "react-icons/fa6";
import { IoNotificationsSharp } from "react-icons/io5";
import ListItem from "./ListItem";

const UserDetails = () => {
  const items = [
    {
      title : "Dashboard",
      icon : <RxDashboard/>
    },
    {
      title : "Profile",
      icon : <RiProfileLine/>
    },
    {
      title : "Add Project",
      icon : <MdOutlinePostAdd/>
    },
    {
      title : "Your Projects",
      icon : <RiProjectorLine/>
    },
    {
      title : "Settings",
      icon : <IoSettings/>
    },
    {
      title : "Notifications",
      icon : <IoNotificationsSharp/>
    },
    {
      title : "Comments",
      icon : <FaComments/>
    },
  ]
  return (
    <div className="container bg-white-200 rounded shadow br-gray  ">
      <div className="user flex p-4 justify-center shadow-sm w-full ">
        
          <img src="https://th.bing.com/th/id/OIP.52T8HHBWh6b0dwrG6tSpVQHaFe?rs=1&pid=ImgDetMain" alt="" className="rounded-full  bg-black" height={100} width={100}/>
        
        <div className="details px-3 text-center mt-4">
          <h1 className="font-bold">User-93</h1>
          <p>093672882</p>
        </div>
      </div>
      <h1 className="text-xl font-bold m-4">My account</h1>
      <div className="list-details block justify-center p-4">
        <ul className=" font-medium ">
            {items.map((item) =>(
              <ListItem key={item.title} title={item.title} Icon={item.icon}/>
            ))}
        </ul>
      </div>






      {/* User details content */}
    </div>
  );
};

export default UserDetails;