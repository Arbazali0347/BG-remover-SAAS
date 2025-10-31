import multer from "multer"

// creating multer middleware for parsing formdata
const storage = multer.diskStorage({
    filename: function(re, file, callblack){
        callblack(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage})

export default upload