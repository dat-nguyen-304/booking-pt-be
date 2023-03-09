import express from "express";
import PaymentController from "../controllers/PaymentController";
import verifyAccessToken from "../middleware/VerifyAccessToken";
import verifyAuthorization from "../middleware/VerifyAuthorization";
import upload from "../middleware/StoreImg";
const paymentRouter = express.Router();

paymentRouter.route('/')
    .get(PaymentController.getAll)
    .post(verifyAccessToken, verifyAuthorization(['admin']), PaymentController.create);

paymentRouter.route('/:paymentId')
    .patch(verifyAccessToken, verifyAuthorization(['admin']), PaymentController.update)
    .delete(verifyAccessToken, verifyAuthorization(['admin']), PaymentController.deleteById);

export default paymentRouter;
