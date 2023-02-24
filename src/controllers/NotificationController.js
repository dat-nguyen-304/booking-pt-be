import NotificationService from "../services/NotificationService";

const postNotification = async (req, res) => {
    try {
        let response = await NotificationService.postNotification(req.body);
        return res.status(200).json(response);
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            errorCode: -1,
            message: "Error from server...",
        });
    }
};

module.exports = {
    postNotification
}