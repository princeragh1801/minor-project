
import {successMsg, errorMsg} from "../utils/toastMessage"
import {getAllProjectsAPI, getUserProjectsAPI, uploadProjectAPI} from "./apis"
import getCookie from "../utils/getCookie";

const token = getCookie("accessToken");

export class ProjectServices{

  async uploadProject(data){
    try {
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("overview", data.overview);
        formData.append("category", data.category);
        formData.append("previewImage", data.previewImage[0]); // Append the file
        formData.append("file", data.file[0]); // Append the file
  
        const response = await fetch(
          uploadProjectAPI,
          { 
            method: "POST",
            headers: {
              Authorization: token,
            },
            body: formData,
          }
        );
  
        if (!response.ok) {
          errorMsg("Failed to upload project");
          return null;
        }
        successMsg("Project uploaded successfully");
        return "ok";
        
      } catch (error) {
        errorMsg(error.message);
        return null;
      }
      return "ok";
  }

  async getAllProjects(){
      let projects;
      try {
          const response = await fetch(
            getAllProjectsAPI,
            {
              method: "GET",
              headers: {
                Authorization: token,
              },
            }
          );
          if(!response.ok){
            errorMsg("Error while fetching the projects");
            return;
          }
          const responseData = await response.json();
          projects = responseData.data.projects;
        } catch (error) {
          errorMsg(error.message);
        }
      return projects;
  }

  async getUserProjects(){
      let projects;
      try {
          const response = await fetch(
            getUserProjectsAPI,
            {
              method: "GET",
              headers: {
                Authorization: token,
              },
            }
          );
          if(!response.ok){
            errorMsg("Error while fetching the users projects");
            return;
          }
          const responseData = await response.json();
          projects = responseData.data.projects;
        } catch (error) {
          errorMsg(error.message);
        }
      return projects;
  }
}

const projectServices = new ProjectServices();

export default projectServices;