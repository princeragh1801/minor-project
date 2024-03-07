import React from "react";
import RTE from "./RTE";
import Input from "../../components/Input";
// import ImageUpload from "./ImageUpload";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import getCookie from "../../utils/getCookie";
import { toast } from "react-toastify";
import Select from "../../components/Select"
import { useDispatch } from "react-redux";
import { setUser } from "../../store/userSlice";
function AddProject() {
  const token = getCookie("accessToken");
  const dispatch = useDispatch();
  const {register, handleSubmit, watch, setValue, control, 
    getValues} = useForm({
    defaultValues : {
      title : "",
      description : "",
      overview : "",
      category : "",
    }
  });

  const uploadProject = async (data) => {
    // console.log("inside upload project");
    // const overview = getValues('overview');
    // console.log("overview from getVal : ", overview)
    try {
      // console.log("Overview : ", data.overview)

      // console.log("Data : ", data)
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("overview", data.overview);
      formData.append("category", data.category);
      formData.append("previewImage", data.previewImage[0]); // Append the file
      formData.append("file", data.file[0]); // Append the file

      console.log("form Data : ", formData);
      const response = await fetch(
        "http://localhost:8000/api/v1/projects/upload-project",
        {
          method: "POST",
          headers: {
            Authorization: token,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        toast.error("Failed to upload project");
        return;
      }
      toast.success("Project uploaded successfully");
      // const user = fetch(
      //   "http://localhost:8000/api/v1/users/current-user",
      //   {
      //     method : 'GET',
      //   }
      // )
      // if(!user){
      //   toast.error("Error while fetching users details");
      // }
      // dispatch(setUser(user))
    } catch (error) {
      toast.error(error.message);
      return;
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className=" my-10 ">
          <h1 className="font-bold text-2xl text-center mb-10">Add Project</h1>
        </div>

        <form onSubmit={handleSubmit(uploadProject)}>
          <div className="flex">
            {/* Left Container */}
            <div className="w-1/2 mx-4  px-4">
              <Input
                label="Title"
                placeholder="Enter title"
                {...register("title", {
                  required: true,
                })}
              />
              <Input
                label="Description"
                placeholder="Enter Description"
                {...register("description", {
                  required: true,
                })}
              />
              <Input
                label="Preview Image"
                type="file"
                accept="Image/*"
                {...register("previewImage", {
                  required: true,
                })}
              />
              <Input
                label="File"
                type="file"
                accept=".txt, .pdf"
                {...register("file", {
                  required: true,
                })}
              />
            </div>

            {/* Right Container */}
            <div className="w-1/2 mx-4 px-4">
            <Select
                    options={["hardware", "software"]}
                    label="Category"
                    className="mb-4"
                    {...register("category", { required: true })}
                />
              <RTE 
              label="Overview " 
              name="overview" 
              control={control} 
              defaultValue={getValues("content")} 
              />
              
            </div>
          </div>

          <div className="w-full flex justify-center m-4">
          <Button className=" text-center bg-green-500 text-white" type="submit" title={"Upload Project"} />
          </div>
        </form>
      </div>
    </>
  );
}

export default AddProject;

// {/* Two containers */}
