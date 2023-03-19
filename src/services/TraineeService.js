import db from "../models/index";
const getAll = async () => {
    try {
        const trainees = await db.Trainee.findAll({
            include: [
                { model: db.TraineePackage, as: 'currentTraineePackage' },
            ],
            attributes: {
                exclude: ['currentTraineePackageId']
            },
            raw: true,
            nest: true
        });
        return {
            errorCode: 0,
            trainees
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const getById = async (id) => {
    try {
        const trainee = await db.Trainee.findOne({
            where: { traineeId: id },
            include: [
                { model: db.TraineePackage, as: 'currentTraineePackage' },
            ],
            attributes: {
                exclude: ['currentTraineePackageId']
            },
            raw: true,
            nest: true
        });
        if (!trainee) return {
            errorCode: 1,
            message: 'Trainee ID does not exist'
        }
        return {
            errorCode: 0,
            trainee
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const update = async (id, traineeData) => {
    try {
        if (!id) return {
            errorCode: 1,
            message: 'traineeId is required'
        }
        const trainee = await db.Trainee.findOne({
            where: { traineeId: id },
            include: [
                { model: db.TraineePackage, as: 'currentTraineePackage' },
            ],
            attributes: {
                exclude: ['currentTraineePackageId']
            },
            nest: true
        });
        if (!trainee) return {
            errorCode: 1,
            message: 'Trainee ID does not exist'
        }

        await trainee.update(traineeData);
        return {
            errorCode: 0,
            trainee
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}


module.exports = {
    getAll, getById, update
}