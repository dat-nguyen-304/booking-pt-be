import express from "express";
import CenterController from "../controllers/CenterController";
import verifyAccessToken from "../middleware/VerifyAccessToken";
import verifyAuthorization from "../middleware/VerifyAuthorization";
const centerRouter = express.Router();

centerRouter.route('/')
    .get(CenterController.getAllCenter)
    .post(CenterController.postNewCenter);
    // .post(verifyAccessToken, verifyAuthorization(['admin']),CenterController.postNewCenter);
centerRouter.route('/:centerId')
    .get(CenterController.getCenterById);
export default centerRouter;