import {Request} from "express";

const multer = require("multer");
const path = require("path");

const publicDir = path.join(__dirname, "./../../public");
const uploadDir = path.join(publicDir, "uploads");

const storage = multer.diskStorage({
    destination: (req: Request, file: any, cb: any) => {
        cb(null, uploadDir);
    },
    
    filename: (req: Request, file: any, cb: any) => {
        const uniqSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqSuffix + path.extname(file.originalname));
    }
});

module.exports = multer({storage: storage});