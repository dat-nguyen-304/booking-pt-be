import db from "../models/index";
const getAllPackageCategory = async () => {
    try {
        const packageCategorys = await db.PackageCategory.findAll({
            raw: true
        });
        return {
            errorCode: 0,
            packageCategorys
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const getPackageCategoryById = async (id) => {
    try {
        const packageCategorys = await db.PackageCategory.findOne({
            where: { packageCategoryId: id },
            raw: true
        });
        if (!packageCategorys) return {
            errorCode: 1,
            description: 'packageCategoryId is not exist'
        }
        return {
            errorCode: 0,
            packageCategorys
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

module.exports = {
    getAllPackageCategory, getPackageCategoryById
}