import express from "express";
import SessionController from "../controllers/SessionController";
const sessionRouter = express.Router();

sessionRouter
    .route("/")
    .get(SessionController.getAll)
    .post(SessionController.create)
sessionRouter
    .route("/:sessionId")
    .get(SessionController.getById)
    .patch(SessionController.update)
    .delete(SessionController.deleteById)

export default sessionRouter;