import { RxDashboard } from "react-icons/rx";
import { RiProfileLine } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { RiProjectorLine } from "react-icons/ri";

import Dashboard from "./Dashboard";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";
import { useEffect, useState } from "react";
import ViewProjects from "../../components/ViewProjects";
import EditProfile from "./EditProfile";
import Settings from "./Settings";
import {getUserProjectsAPI} from "../../services/apis.js"
import getCookie from "../../utils/getCookie.js"
import {successMsg, errorMsg} from "../../utils/toastMessage.js"
const Profile = () => {
  const token = getCookie("accessToken");
  const user = useSelector(selectUser)
  const [component, setComponent] = useState(0)
  
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    let userProjects;
    const fetchUserProject = (async()=> {
      try {
        const response = await fetch(
          getUserProjectsAPI,
          {
            method : 'GET',
            headers : {
              'Authorization' : token
            }
          }
        )
        if(!response.ok){
          errorMsg("Failed to fetch the users projects");
        }
        const responseData = await response.json();
        console.log("response data : ", responseData)
        userProjects = responseData.data.userProjects;
        setProjects(userProjects)
        successMsg("Projects fetched")
    
      } catch (error) {
        errorMsg(error.message);
      }
    })
    fetchUserProject();
    setProjects(userProjects)
    console.log("User Projects : ", projects)
  }, [])
  const items = [
    {
      title : "Dashboard",
      icon : <RxDashboard/>,
      page : <Dashboard/>
    },
    {
      title : "Edit Profile",
      icon : <RiProfileLine/>,
      page : <EditProfile/>
    },
    {
      title : "Your Projects",
      icon : <RiProjectorLine/>,
      page : <ViewProjects title={"Your Projects"} projects={projects}/>
    },
    {
      title : "Settings",
      icon : <IoSettings/>,
      page : <Settings/>

    },
    // {
    //   title : "Notifications",
    //   icon : <IoNotificationsSharp/>
    // },
    // {
    //   title : "Comments",
    //   icon : <FaComments/>
    // },
  ]
    return (
      <div className="container mx-auto py-5">
        <div className="flex">
          {/* Left container */}
          <div className="md:col-span-1 p-3 w-[20%] ">
          <div className="container bg-white-200 rounded shadow br-gray  ">
      <div className="user flex p-4 justify-center shadow-sm w-full ">
        
          <img src="https://th.bing.com/th/id/OIP.52T8HHBWh6b0dwrG6tSpVQHaFe?rs=1&pid=ImgDetMain" alt="" className="rounded-full  bg-black" height={100} width={100}/>
        
        <div className="details px-3 text-center mt-4">
          <h1 className="font-bold">{user['fullname']}</h1>
          <p>{user['username']}</p>
        </div>
      </div>
      <h1 className="text-xl font-bold m-4">My account</h1>
      <div className="block justify-center p-4">
        <ul className=" font-medium ">
            {items.map((item, index) =>(
              <button onClick={()=> setComponent(index)}>
                <div className="flex justify-start mb-4">
              <div className="mr-2 mt-1 text-green-500">{item.icon}</div>
              <h3 className="font-bold text-md">{item.title}</h3>
            </div>
              </button>
            ))}
        </ul>
      </div>

      {/* Right container */}
    </div>
          </div>
          
          <div className="md:col-span-1 p-3 w-full ml-5">
              {items[component].page}
          </div>
        </div>
      </div>
    );
  };
  
  export default Profile;