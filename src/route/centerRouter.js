import express from "express";
import CenterController from "../controllers/CenterController";
import verifyAccessToken from "../middleware/VerifyAccessToken";
import verifyAuthorization from "../middleware/VerifyAuthorization";
import upload from "../middleware/StoreImg";
const centerRouter = express.Router();

centerRouter.route('/')
    .get(CenterController.getAllCenter)
    .post(/*verifyAccessToken, verifyAuthorization(['admin']),*/ upload.single('centerImg'), CenterController.postNewCenter);

centerRouter.route("/:centerId")
    .get(CenterController.getCenterById)
    .patch(upload.single('centerImg'),CenterController.updateOrToggleActivate)
    .delete(CenterController.deleteCenterById);

export default centerRouter;