import express from "express";
import PackageCategoryController from "../controllers/PackageCategoryController";
const packageCategoryRouter = express.Router();

packageCategoryRouter
  .route("/")
  .get(PackageCategoryController.getAllPackageCategory);
packageCategoryRouter
  .route("/:packageCategoryId")
  .get(PackageCategoryController.getPackageCategoryById);

export default packageCategoryRouter;
