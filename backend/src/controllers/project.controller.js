import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Project } from "../models/project.model.js";

const uploadProject = asyncHandler(async(req, res) => {
    console.log("inside backend upload project")

    const {title, description, overview, category} = req.body;
    console.log("Req body : ", req.body)
    if( !title || !description || !overview || !category){
        throw new ApiError(404, "All the fields are required")
    }
    console.log("Checked all the requrired details")
    const user = req.user;
    console.log("User : ", user);
    console.log("Req files : ", req.files)
    const previewImageLocalPath = req.files.previewImage[0]?.path;
    const fileLoacalPath = req.files.file[0]?.path;
    
    if(!previewImageLocalPath){
        throw new ApiError(404, "Preview Image is required");
    }
    if(!fileLoacalPath){
        throw new ApiError(404, "File is required");
    }

    console.log("Files extracted successfully");
    let demoVideoFileLoacalPath;

    if(req.files && (Array.isArray(req.files.demoVideoFile)) && req.files.demoVideoFile.length > 0){
        demoVideoFileLoacalPath = req.files.demoVideoFile[0].path;
    }

    const previewImagePath = await uploadOnCloudinary(previewImageLocalPath);
    const filePath = await uploadOnCloudinary(fileLoacalPath)
    const demoVideoFilePath = await uploadOnCloudinary(demoVideoFileLoacalPath)
    
    if(!previewImagePath || !filePath){
        throw new ApiError(500, "Something went wrong while uploading the files on cloudinary")
    }
    console.log("Files uploaded successfully");
    console.log("Preview Image path : ", previewImagePath)
    const createdProject = await Project.create({
        owner : user,
        title : title,
        description : description,
        overview : overview,
        category : category,
        previewImage : previewImagePath.url,
        file : filePath.url,
        demoVideoFile : demoVideoFilePath?.url,
        likes : 0,
    })
    console.log("createdProject : ", createdProject)
    if(!createdProject){
        throw new ApiError(500, "Something went wrong while creating a project")
    }

    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            {},
            "Project uploaded successfully"
        )
    )
})

const getUserProjects = asyncHandler(async(req, res) =>{
    const user = req.user;
    
})

export {
    uploadProject
}