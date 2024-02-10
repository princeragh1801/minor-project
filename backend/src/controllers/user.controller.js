import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import {ApiResponse} from "../utils/ApiResponse.js"

const cookieOptions = {
    httpOnly : true,
    secure : true
}


const generateAccessAndRefreshTokens = async(userId) =>{
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({validateBeforeSave: false})

        return {accessToken, refreshToken}
    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating acess and refresh token");
    }
}

const registerUser = asyncHandler( async (req, res) => {
    // steps to register user
    // get user details from frontend
    // validation - not empty
    // check if user already exist : username and email
    // check for images, check for avatar
    // upload them to cloudinary, check avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return response

    const {fullname, email, username, password} = req.body;
    console.log("email : ", email);

    // we can handle it separately also
    if(
        [fullname, email, username, password].some((field)=> field?.trim() === "")
    ){
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = await User.findOne({
        $or : [{username}, {email}]
    })

    if(existedUser){
        throw new ApiError(409, "User with email or username already exist")
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    console.log(req.files)
    if(!avatarLocalPath){
        throw new ApiError(400, "Avatar is required")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath);

    if(!avatar){
        throw new ApiError(400, "Avatar is required")
    }

    const user = await User.create({
        fullname : fullname,
        avatar : avatar.url,
        email : email,
        username : username.toLowerCase(),
        password : password,
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    );
    
    if(!createdUser){
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(200).json(
        new ApiResponse(
            200, // status code
            createdUser, // data
            "User registered successfully" //message
        )
    )
})

const loginUser = asyncHandler(async (req, res) => {

    // steps to login user
    // get user details from frontend
    // validation - not empty
    // find the user
    // password check
    // access and refresh token update
    // send cookie

    const {email, username, password} = req.body;
    
    if((email === "" && username === "") || password === ""){
       throw new ApiResponse(404, "All fields required")
    }

    const user = await User.findOne({
        $or : [{username}, {email}]
    })

    if(!user){
        throw new ApiError(404, "User doesn't exist")
    }

    const isPasswordValid = await user.isPasswordCorrect(password)

    if(!isPasswordValid){
        throw new ApiError(401, "Invalid password")
    }

    const {accessToken, refreshToken} = await generateAccessAndRefreshTokens(user._id);

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

    return res
    .status(200)
    .cookie("accessToken", accessToken, cookieOptions)
    .cookie("refreshToken", refreshToken, cookieOptions)
    .json(
        new ApiResponse(
            200,
            {
                user : loggedInUser, accessToken, refreshToken
            },
            "User logged in successfully"
        )
    )
})

const logoutUser = asyncHandler(async(req, res) => {
    // delete the cookies
    // remove the accessToken, refreshToken

    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set : {
                refreshToken : undefined
            }
        },
        {
            new : true
        }
    );

    return res
    .status(200)
    .clearCookie("accessToken", cookieOptions)
    .clearCookie("refreshToken", cookieOptions)
    .json(
        new ApiResponse(
            200,
            {},
            "User logged out successfully"
        )
    )

})
export {registerUser,loginUser, logoutUser}