import express from "express";
import PackageController from "../controllers/PackageController";
import verifyAccessToken from "../middleware/VerifyAccessToken";
import verifyAuthorization from "../middleware/VerifyAuthorization";
const packageRouter = express.Router();

packageRouter
    .route("/")
    .post(verifyAccessToken, verifyAuthorization(['admin']), PackageController.create)
    .get(PackageController.getAllPackage);
packageRouter
    .route("/:packageId")
    .get(PackageController.getPackageById)
    .patch(verifyAccessToken, verifyAuthorization(['admin']), PackageController.updateOrToggleActivate)
    .delete(verifyAccessToken, verifyAuthorization(['admin']), PackageController.deleteById)

export default packageRouter;