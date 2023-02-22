const { Storage } = require("@google-cloud/storage");
import path from 'path';
const storage = new Storage({
    keyFilename: path.join(__dirname, "../config/serviceAccount.json"),
});

const imgUrl = async (fileUrl, dist) => {

    if (typeof fileUrl == "string") {
        const split1 = fileUrl.split("o/");
        const split2 = split1[1].split("?");
        const bucket = storage.bucket("gs://authen-39b0f.appspot.com");
        const [files] = await bucket.getFiles({ prefix: `${dist}/` });
        files.forEach(file => {
            if (file.id == split2[0]) {
                file.delete({
                    ignoreNotFound: true
                });
                return true;
            }
        })
    } else {
        return false;
    }
}

export default imgUrl;