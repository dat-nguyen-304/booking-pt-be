import express from "express";
import MeasureController from "../controllers/MeasureController";
import verifyAccessToken from "../middleware/VerifyAccessToken";
import verifyAuthorization from "../middleware/VerifyAuthorization";
import upload from "../middleware/StoreImg";
const measureRouter = express.Router();

measureRouter.route('/')
    .get(MeasureController.getAll)
    .post(/*verifyAccessToken, verifyAuthorization(['admin']),*/ MeasureController.create);

measureRouter.route('/:measureId')
    .patch(/*verifyAccessToken, verifyAuthorization(['admin']),*/ MeasureController.update)
    .delete(/*verifyAccessToken, verifyAuthorization(['admin']),*/ MeasureController.deleteById);

export default measureRouter;
