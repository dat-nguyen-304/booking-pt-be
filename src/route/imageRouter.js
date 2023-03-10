import express from "express";
import ImageController from "../controllers/ImageController";
import verifyAccessToken from "../middleware/VerifyAccessToken";
import verifyAuthorization from "../middleware/VerifyAuthorization";
import upload from "../middleware/StoreImg";
const imageRouter = express.Router();

imageRouter.route('/')
    .get(ImageController.getAll)
    .post(/*verifyAccessToken, verifyAuthorization(['admin']),*/ upload.array('imgFile', 12), ImageController.postNew);

imageRouter.route('/:imageId')
    .get(ImageController.getById)
    .delete(/*verifyAccessToken, verifyAuthorization(['admin']),*/ ImageController.deleteById);

export default imageRouter;