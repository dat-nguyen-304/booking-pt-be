import express from "express";
import PackageController from "../controllers/PackageController";
const packageRouter = express.Router();

packageRouter
    .route("/")
    .get(PackageController.getAllPackage);
packageRouter
    .route("/:packageId")
    .get(PackageController.getPackageById);

export default packageRouter;