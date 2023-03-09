import express from "express";
import PTController from "../controllers/PTController";
import upload from "../middleware/StoreImg";
const PTRouter = express.Router();

PTRouter
    .route("/")
    .get(PTController.getAll)
    .post(upload.single('imgLink'), PTController.create);
PTRouter
    .route("/:PTId")
    .get(PTController.getById)
    .patch(upload.single('imgLink'), PTController.update);

export default PTRouter;