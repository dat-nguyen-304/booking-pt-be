import express from "express";
import AccountController from "../controllers/AccountController";
import verifyAccessToken from "../middleware/VerifyAccessToken";
import verifyAuthorization from "../middleware/VerifyAuthorization";

const accountRouter = express.Router();

accountRouter.route('/')
    .get(verifyAccessToken, verifyAuthorization(['admin']), AccountController.getAllAccount)

accountRouter.route('/:accountId')
    .get(verifyAccessToken, AccountController.getAccountById)

export default accountRouter;