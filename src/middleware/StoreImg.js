const multer = require('multer');
const os = require("os");
const tempDir = os.tmpdir()

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, tempDir)
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})
const upload = multer({
    storage
})

export default upload;