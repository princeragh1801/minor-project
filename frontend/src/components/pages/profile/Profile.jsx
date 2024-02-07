import Projects from "./Project";
import UserDetails from "./Userdetails";
const Profile = () => {
    return (
      <div className="container mx-auto py-5">
        <div className="flex">
          <div className="md:col-span-1 p-3 w-[20%] ">
            <UserDetails />
          </div>
          
          <div className="md:col-span-1 p-3 w-[35%] ml-5">
          <Projects />
          </div>
        </div>
      </div>
    );
  };
  
  export default Profile;