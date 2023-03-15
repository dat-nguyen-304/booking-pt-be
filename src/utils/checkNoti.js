import db from "../models/index";
const moment = require('moment');
const { Op } = require('sequelize');
import NotificationService from "../services/NotificationService";

async function checkNotify () {

    try {
        const today = new Date();
        const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
        const now = moment();
        const notificationTime = now.clone().add(30, 'minutes'); 
        const session = await db.Session.findAll({
            where: {
                date: {
                    [Op.between]: [startOfDay, endOfDay]
                }
            },
            include: [
                { model: db.Slot, as: 'slot' },
            ],
            attributes: {
                exclude: ['slotId'],
            },
            nest: true,
            raw: true
        });
        for(const user of session) {
            const arr = user.slot.slotTime.split("-");
            const slotTime = moment(arr[0], 'HH:mm');
            console.log("1",now);
            console.log("2",notificationTime);
            if (slotTime.isBetween(now, notificationTime)) {
                console.log(`Send notification for slot ${arr[0]}`);
                const message = {
                    title: "Nhắc nhở",
                    message: `Bạn có lớp học lúc ${arr[0]}`,
                }
                await NotificationService.postNotification(1, message);
              }
        }
    } catch (error) {
        console.error('Error when sending notification', error);
    }
}


export default checkNotify;