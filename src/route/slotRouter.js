import express from "express";
import SlotController from "../controllers/SlotController";
import verifyAccessToken from "../middleware/VerifyAccessToken";
import verifyAuthorization from "../middleware/VerifyAuthorization";
import upload from "../middleware/StoreImg";
const slotRouter = express.Router();

slotRouter.route('/')
    .get(SlotController.getAll)
    .post(/*verifyAccessToken, verifyAuthorization(['admin']),*/ SlotController.create);

slotRouter.route('/:slotId')
    .patch(SlotController.updateOrDeactivate)

export default slotRouter;
