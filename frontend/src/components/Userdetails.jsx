import { RxDashboard } from "react-icons/rx";
import { RiProfileLine } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { MdOutlinePostAdd } from "react-icons/md";
import { RiProjectorLine } from "react-icons/ri";
import { FaComments } from "react-icons/fa6";
import { IoNotificationsSharp } from "react-icons/io5";
const UserDetails = () => {
  return (
    <div className="container   bg-white-200 rounded shadow br-gray  ">
      <div className="user flex p-4 justify-center shadow-lg w-full ">
        <div className="img ">
          <img src="src/assets/Images/Collab-rafiki.png" alt="" className="rounded-full w-[50px] bg-black" />
        </div>
        <div className="details px-3">
          <h1 className="font-bold">User-93</h1>
          <p>093672882</p>
        </div>
      </div>
      <hr />
      <h1 className="font-bold align-center m-5 mt-10">My account</h1>
      <div className="list-details block justify-center p-5">
        <ul className="m-4 font-medium font-serif">
          <li className="mt-5 flex "><a href="#"><RxDashboard /> Dashboard</a></li>
          <li className="mt-5 flex "><a href=""><RiProfileLine />  Profile</a></li>
          <li className="mt-5 flex "><a href=""><IoSettings /> Setting</a></li>
          <li className="mt-5 flex "><a href=""><MdOutlinePostAdd /> My Post</a></li>
          <li className="mt-5 flex "><a href=""><RiProjectorLine /> My Project</a></li>
          <li className="mt-5 flex "><a href=""><FaComments />  My comments</a></li>
          <li className="mt-5 flex "><a href=""><IoNotificationsSharp /> Notification</a></li>


        </ul>
      </div>






      {/* User details content */}
    </div>
  );
};

export default UserDetails;