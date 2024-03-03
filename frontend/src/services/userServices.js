
import getCookie from '../utils/getCookie'

const url = "http://localhost:8000/api/v1/";

const getUser = async()=>{
    let currUser;
    try {
        const token = getCookie("accessToken");
        console.log("Token : ", token)
        const response = await fetch(`${url}users/current-user`, {
          method: "GET",
          headers : {
            "Authorization": token
          }
        })
        console.log("Response : ", response)
        
        if(response.ok){
          const user = await response.json()
          console.log("User : ", user)
          
          if(user){
            currUser = user;
            navigate("/home")
          }
        }
      } catch (error) {
        console.log("Error while fetching the current user : ", error)
      }
      return currUser
}

export {getUser}