const { Storage } = require("@google-cloud/storage");
const UUID = require("uuid-v4");
const storage = new Storage({
    keyFilename: "../booking-pt-be/src/config/serviceAccount.json",
});

const imgUrl = async (file, dist) => {
    let uuid = UUID();
    const bucket = storage.bucket("gs://authen-39b0f.appspot.com");
    var downLoadPath =
        "https://firebasestorage.googleapis.com/v0/b/authen-39b0f.appspot.com/o/";
    if (file.size == 0) {
        return null;
    } else {
        const imageResponse = await bucket.upload(file.path, {
            destination: `${dist}/${file.originalname}`,
            resumable: true,
            metadata: {
                metadata: {
                    firebaseStorageDownloadTokens: uuid,
                },
            },
        });
        // profile image url
        const imgUrlDow =
            downLoadPath +
            encodeURIComponent(imageResponse[0].name) +
            "?alt=media&token=" +
            uuid;
        return imgUrlDow;
    }
}

export default imgUrl;