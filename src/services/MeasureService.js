import db from "../models/index";

const getAll = async (query) => {
    try {
        let { limit, page, traineeId, recorder, sortBy, order } = query;

        const options = { raw: true };

        if (page) {
            options.page = Number.parseInt(page);
            options.limit = Number.parseInt(limit) || 10;
            options.offset = (page - 1) * options.limit;
        }

        if (sortBy) {
            order = order || 'asc';
            options.order = [[sortBy, order]]
        }

        if (recorder) {
            options.where = {
                recorder: {
                    [Op.like]: `%${recorder}%`
                }
            }
        }

        if (traineeId) {
            options.where = {
                ...options.where,
                traineeId
            }
        }

        const measures = await db.Measure.findAndCountAll({
            ...options,
            include: [
                { model: db.Trainee, as: 'trainee' },
            ],
            attributes: {
                exclude: ['traineeId']
            },
            nest: true
        });
        return {
            errorCode: 0,
            totalItems: measures.count,
            totalPage: Math.ceil(measures.count / options.limit),
            measures: measures.rows
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const create = async (measureData) => {
    try {
        const measure = await db.Measure.create(measureData);
        return {
            errorCode: 0,
            measure
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const update = async (id, measureData) => {
    try {
        const measure = await db.Measure.findOne({
            where: { measureId: id }
        });
        if (!measure) return {
            errorCode: 1,
            message: 'Measure ID does not exist'
        }
        await measure.update(measureData);
        return {
            errorCode: 0,
            measure
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const deleteById = async (id) => {
    try {
        const measureFound = await db.Measure.findOne({
            where: { measureId: id }
        });
        if (!measureFound) return {
            errorCode: 1,
            message: 'Measure ID does not exist'
        }
        const indexFound = await db.Index.findOne({ measureId: measureFound.measureId });
        if (!indexFound) {
            await measureFound.destroy();
            return {
                errorCode: 0,
                message: 'success'
            }
        }
        else return {
            errorCode: 0,
            message: 'Can not delete this measure because of existing index'
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

module.exports = {
    getAll, create, update, deleteById
}