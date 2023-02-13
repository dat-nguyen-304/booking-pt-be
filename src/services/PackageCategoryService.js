import db from "../models/index";
const getAllPackageCategory = async () => {
    try {
        const packageCategories = await db.PackageCategory.findAll({
            raw: true
        });
        return {
            errorCode: 0,
            packageCategories
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const getPackageCategoryById = async (id) => {
    try {
        const packageCategories = await db.PackageCategory.findOne({
            where: { packageCategoryId: id },
            raw: true
        });
        if (!packageCategories) return {
            errorCode: 1,
            description: 'packageCategoryId is not exist'
        }
        return {
            errorCode: 0,
            packageCategories
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

module.exports = {
    getAllPackageCategory, getPackageCategoryById
}