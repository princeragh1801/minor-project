import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { uploadProject } from "../controllers/project.controller.js";
import {verifyJWT} from "../middlewares/auth.middleware.js"

const router = Router()

router.use(verifyJWT)

router.route("/upload-project").post(
    upload.fields([
        {
            name : "previewImage",

        },
        {
            name : "file",
        },
    ]),
    uploadProject
)

export default router;