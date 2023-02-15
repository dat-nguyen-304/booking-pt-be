import express from "express";
import CenterController from "../controllers/CenterController";
const centerRouter = express.Router();

centerRouter.route('/')
    .get(CenterController.getAllCenter)
    .post(CenterController.postNewCenter);
centerRouter.route('/:centerId')
    .get(CenterController.getCenterById);
export default centerRouter;