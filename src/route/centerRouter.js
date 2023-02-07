import express from "express";
import CenterController from "../controllers/CenterController";
const centerRouter = express.Router();

centerRouter.route('/')
    .get(CenterController.getAllCenter);
centerRouter.route('/:centerId')
    .get(CenterController.getCenterById);

export default centerRouter;