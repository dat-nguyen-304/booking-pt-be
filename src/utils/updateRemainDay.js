import db from "../models/index";

async function updateRemainDay () {
    try {
        const traineePackages = await db.TraineePackage.findAll({
            where: { status: 'active' }
        });

        for (const traineePackage of traineePackages) {
            const newRemainDay = traineePackage.remainDay - 1;
            if (newRemainDay > 0) {
                await traineePackage.update({ remainDay: newRemainDay });
            } else {
                await traineePackage.update({ remainDay: null, status: 'expired' });
            }
        }
    } catch (error) {
        console.error('Error when updating remainDay', error);
    }
}

export default updateRemainDay;





