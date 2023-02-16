import CenterService from "../services/CenterService";
const { Storage } = require("@google-cloud/storage");
const UUID = require("uuid-v4");
const formidable = require("formidable-serverless");
const storage = new Storage({
    keyFilename: "../booking-pt-be/src/config/serviceAccount.json",
});

const getAllCenter = async (req, res) => {
    try {
        let response = await CenterService.getAllCenter();
        return res.status(200).json(response);
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            errCode: -1,
            message: "Error from server...",
        });
    }
};

const postNewCenter = async (req, res) => {
    try {
        const form = new formidable.IncomingForm({ multiples: true });
        form.parse(req, async (err, fields, files) => {
            let uuid = UUID();
            var downLoadPath =
                "https://firebasestorage.googleapis.com/v0/b/authen-39b0f.appspot.com/o/";
            const profileImage = files.profileImage;
            let imageUrl;
            if (err) {
                return res.status(500).json({
                    errCode: -1,
                    message: "Error from server...",
                });
            }
            const bucket = storage.bucket("gs://authen-39b0f.appspot.com");
            if (profileImage.size == 0) {
                // do nothing
            } else {
                const imageResponse = await bucket.upload(profileImage.path, {
                    destination: `centers/${profileImage.name}`,
                    resumable: true,
                    metadata: {
                        metadata: {
                            firebaseStorageDownloadTokens: uuid,
                        },
                    },
                });
                // profile image url
                imageUrl =
                    downLoadPath +
                    encodeURIComponent(imageResponse[0].name) +
                    "?alt=media&token=" +
                    uuid;
                const newCenter = {
                    centerName: fields.centerName,
                    address: fields.address,
                    imgLink: imageUrl,
                };
                let response = await CenterService.postNewCenter(newCenter);
                res.status(200).send({
                    message: "Uploaded",
                    data: response,
                });
            }
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            errCode: -1,
            message: "Error from server...",
        });
    }
};

const getCenterById = async (req, res) => {
    try {
        let response = await CenterService.getCenterById(req.params.centerId);
        if (response.errorCode === 0) return res.status(200).json(response);
        else return res.status(400).json(response);
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            errCode: -1,
            message: "Error from server...",
        });
    }
};

module.exports = { getAllCenter, getCenterById, postNewCenter };
