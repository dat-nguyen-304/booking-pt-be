import db from "../models/index";

const getAll = async () => {
    try {
        const payments = await db.Payment.findAll({
            raw: true
        });
        return {
            errorCode: 0,
            payments
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const create = async (payments) => {
    try {
        const payment = await db.Payment.create(payments);
        return {
            errorCode: 0,
            payment
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const update = async (id, paymentData) => {
    try {
        const payment = await db.Payment.findOne({
            where: { paymentId: id }
        });
        if (!payment) return {
            errorCode: 1,
            description: 'paymentId is not exist'
        }
        await payment.update(paymentData);
        return {
            errorCode: 0,
            payment
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const deleteById = async (id) => {
    try {
        const paymentFound = await db.Payment.findOne({
            where: { paymentId: id }
        });
        if (!paymentFound) return {
            errorCode: 1,
            description: 'paymentId is not exist'
        }

        const traineePackageFound = await db.TraineePackage.findOne({
            where: { paymentId: paymentFound.paymentId }
        });

        if (!traineePackageFound) {
            await paymentFound.destroy();
            return {
                errorCode: 0,
                message: 'success'
            }
        } else {
            return {
                errorCode: 1,
                message: 'Can not delete this payment because of existing trainee package'
            }
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

module.exports = {
    getAll, create, update, deleteById
}