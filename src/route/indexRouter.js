import express from "express";
import IndexController from "../controllers/IndexController";
import verifyAccessToken from "../middleware/VerifyAccessToken";
import verifyAuthorization from "../middleware/VerifyAuthorization";
import upload from "../middleware/StoreImg";
const indexRouter = express.Router();

indexRouter.route('/')
    .get(IndexController.getAll)
    .post(/*verifyAccessToken, verifyAuthorization(['admin']),*/ IndexController.create);

indexRouter.route('/:indexId')
    .patch(IndexController.update)
    .delete(/*verifyAccessToken, verifyAuthorization(['admin']),*/ IndexController.deleteById);

export default indexRouter;
