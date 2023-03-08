import db from "../models/index";
const { Op } = require('sequelize');

const getAllPackage = async (query) => {
    try {
        let { keyword, limit, page, object, activate, durationByMonth, category, sortBy, order } = query;

        const options = { raw: true };

        const properties = [];
        if (object) properties.push('object');
        if (activate) properties.push('activate');
        if (durationByMonth) properties.push('durationByMonth');
        if (category) properties.push('category');

        properties.forEach(property => {
            options.where = {
                ...options.where,
                [property]: query[property]
            }
        })

        if (keyword) {
            options.where = {
                packageName: {
                    [Op.like]: `%${keyword}%`
                }
            }
        }

        if (page) {
            options.page = Number.parseInt(page);
            options.limit = Number.parseInt(limit) || 10;
            options.offset = (page - 1) * options.limit;
        }

        if (sortBy) {
            order = order || 'asc';
            options.order = [[sortBy, order]]
        }

        const packages = await db.Package.findAndCountAll(options);

        return {
            errorCode: 0,
            totalItems: packages.count,
            totalPage: Math.ceil(packages.count / options.limit),
            packages: packages.rows
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const getPackageById = async (id) => {
    try {
        const packageFound = await db.Package.findOne({
            where: { packageId: id },
            raw: true
        });
        if (!packageFound) return {
            errorCode: 1,
            description: 'packageId is not exist'
        }
        return {
            errorCode: 0,
            package: packageFound
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const create = async (packageData) => {
    try {
        const packageCreated = await db.Package.create(packageData);
        return {
            errorCode: 0,
            package: packageCreated
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const update = async (id, packageData) => {
    try {
        const packageFound = await db.Package.findOne({
            where: { packageId: id }
        });
        if (!packageFound) return {
            errorCode: 1,
            description: 'packageId is not exist'
        }
        await packageFound.update(packageData);
        return {
            errorCode: 0,
            package: packageFound
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const toggleActivate = async (id) => {
    try {
        const packageFound = await db.Package.findOne({
            where: { packageId: id }
        });
        if (!packageFound) return {
            errorCode: 1,
            description: 'packageId is not exist'
        }
        await packageFound.update({ activate: !packageFound.activate });
        return {
            errorCode: 0,
            package: packageFound
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const deleteById = async (id) => {
    try {
        const packageFound = await db.Package.findOne({
            where: { packageId: id }
        });
        if (!packageFound) return {
            errorCode: 1,
            description: 'packageId is not exist'
        }

        await packageFound.destroy();
        return {
            errorCode: 0,
            message: 'success'
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

module.exports = {
    getAllPackage, getPackageById, create, update, toggleActivate, deleteById
}