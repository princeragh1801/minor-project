import mongoose, {Schema} from "mongoose"

const projectSchema = new Schema(
    {
        owner : {
            type : Schema.Types.ObjectId,
            ref : "User",
        },
        title : {
            type : String,
            required : true,
            trim : true,
            index : true,
        },
        description : {
            type : String,
            required : true,
        },
        overview : {
            type : String,
            required : true,
        },
        previewImage : {
            type : String,
            required : true,
        },
        file : {
            type : String,
            required : true,
        },
        category : {
            type : String,
            required : true,
        },
        demoVideoFile :{
            type : String,
        },
        contributors : [
            {
                type : Schema.Types.ObjectId,
                ref : "User"
            }
        ],
        likes : {
            type : Number,
            default : 0,
        },
        // comments : {
        //     type : 
        // }
        
        // contributers
    },{
        timestamps : true
    }
)

export const Project = mongoose.model("Project", projectSchema)