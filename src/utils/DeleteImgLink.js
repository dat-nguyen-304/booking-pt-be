const { Storage } = require("@google-cloud/storage");
const storage = new Storage({
    keyFilename: "../booking-pt-be/src/config/serviceAccount.json",
});

const imgUrl = async (fileUrl,dist) => {

    if (typeof fileUrl == "string" ){
        const split1 = fileUrl.split("o/");
        const split2 = split1[1].split("?");
        const bucket = storage.bucket("gs://authen-39b0f.appspot.com");
        const [files] = await bucket.getFiles({ prefix: `${dist}/` });
        files.forEach(file => {
            if (file.id == split2[0]){
                console.log("da tim thay",file.id);
                file.delete({ 
                    ignoreNotFound: true 
                });
                return true;
            }
        })
    }else{
        console.log("ko phải string");
        return false;
    }
}

export default imgUrl;