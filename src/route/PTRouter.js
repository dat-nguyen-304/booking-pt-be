import express from "express";
import PTController from "../controllers/PTController";
const PTRouter = express.Router();

PTRouter
    .route("/")
    .get(PTController.getAll);
PTRouter
    .route("/:PTId")
    .get(PTController.getById)
    .patch(PTController.update)
    .delete(PTController.deleteById)

export default PTRouter;