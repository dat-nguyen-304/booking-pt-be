import express from "express";
import IndexCategoryController from "../controllers/IndexCategoryController";
import verifyAccessToken from "../middleware/VerifyAccessToken";
import verifyAuthorization from "../middleware/VerifyAuthorization";
import upload from "../middleware/StoreImg";
const indexCategoryRouter = express.Router();

indexCategoryRouter.route('/')
    .get(IndexCategoryController.getAll)
    .post(/*verifyAccessToken, verifyAuthorization(['admin']),*/ IndexCategoryController.create);

indexCategoryRouter.route('/:indexCategoryId')
    .patch(IndexCategoryController.update)
    .delete(/*verifyAccessToken, verifyAuthorization(['admin']),*/ IndexCategoryController.deleteById);

export default indexCategoryRouter;
