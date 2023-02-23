import express from "express";
import PackageController from "../controllers/PackageController";
const packageRouter = express.Router();

packageRouter
    .route("/")
    .get(PackageController.getAllPackage);
packageRouter
    .route("/:packageId")
    .get(PackageController.getPackageById)
    .patch(PackageController.updateOrToggleActivate)
    .delete(PackageController.deleteById)

export default packageRouter;