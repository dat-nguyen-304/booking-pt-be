import express from "express";
import SessionController from "../controllers/SessionController";
import verifyAccessToken from "../middleware/VerifyAccessToken";
import verifyAuthorization from "../middleware/VerifyAuthorization";
const sessionRouter = express.Router();

sessionRouter
    .route("/")
    .get(SessionController.getAll)
    .post(SessionController.create)
sessionRouter
    .route("/:sessionId")
    .get(SessionController.getById)
    .patch(SessionController.update)

export default sessionRouter;