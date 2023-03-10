import express from "express";
import PTController from "../controllers/PTController";
import verifyAccessToken from "../middleware/VerifyAccessToken";
import verifyAuthorization from "../middleware/VerifyAuthorization";
import upload from "../middleware/StoreImg";
const PTRouter = express.Router();

PTRouter
    .route("/")
    .get(PTController.getAll)
    .post(/*verifyAccessToken, verifyAuthorization(['admin']),*/ upload.single('imgLink'), PTController.create);
PTRouter
    .route("/:PTId")
    .get(PTController.getById)
    .patch(/*verifyAccessToken, verifyAuthorization(['admin','pt']),*/ upload.single('imgLink'), PTController.update);

export default PTRouter;