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
        <div className="img ">
          <img src="src/assets/Images/Collab-rafiki.png" alt="" className="rounded-full w-[50px] bg-black" />
        </div>
        <div className="details px-3">
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