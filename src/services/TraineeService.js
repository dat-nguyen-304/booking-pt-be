import db from "../models/index";
const getAll = async () => {
    try {
        const trainees = await db.Trainee.findAll({
            raw: true
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
            raw: true
        });
        if (!trainee) return {
            errorCode: 1,
            description: 'Trainee Id is not exist'
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
        const trainee = await db.Trainee.findOne({
            where: { traineeId: id }
        });
        if (!trainee) return {
            errorCode: 1,
            description: 'TraineeId is not exist'
        }
        console.log(traineeData);
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