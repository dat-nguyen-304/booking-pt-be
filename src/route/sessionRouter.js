import express from "express";
import SessionController from "../controllers/SessionController";
import verifyAccessToken from "../middleware/VerifyAccessToken";
import verifyAuthorization from "../middleware/VerifyAuthorization";
const sessionRouter = express.Router();

sessionRouter
    .route("/")
    .get(/*verifyAccessToken, */SessionController.getAll)
    .post(/*verifyAccessToken, verifyAuthorization(['admin']),*/ SessionController.create)
sessionRouter
    .route("/:sessionId")
    .get(verifyAccessToken, SessionController.getById)
    .patch(verifyAccessToken, verifyAuthorization(['user', 'admin']), SessionController.update)

export default sessionRouter;