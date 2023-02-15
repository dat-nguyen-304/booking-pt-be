import express from "express";
import AuthController from "../controllers/AuthController";
import verifyGoogleToken from "../middleware/VerifyGoogleToken";
import verifyRefreshToken from "../middleware/VerifyRefreshToken";
const authRouter = express.Router();


authRouter.route('/login')
    .post(verifyGoogleToken, AuthController.login)
authRouter.route('/tokens')
    .post(verifyRefreshToken, AuthController.getTokens)
export default authRouter;