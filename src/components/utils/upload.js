/*import aws from 'aws-sdk'
import multer from 'multer'
import multerS3 from 'multer-s3'

aws.config.update({
    secretAccessKey: process.env.AWS_SECRET_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    region: process.env.AWS_REGION,
})

const s3 = new aws.S3({
    
})

const upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: process.env.AWS_BUCKET,
      acl: 'public-read',
      contentType: multerS3.AUTO_CONTENT_TYPE,
      metadata: function (req, file, cb) {
        cb(null, {fieldName: file.fieldname});
      },
      key: function (req, file, cb) {
        const fileName = `${Date.now()}-${file.originalname}`
        cb(null, fileName)
      }
    })
  })
  export default upload*/

import aws from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3";
const path = require("path");

const storageTypes = {
  local: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(
        null,
        path.resolve(
          __dirname,
          "..",
          "..",
          "..",
          "..",
          "..",
          "public",
          "upload",
          "products"
        )
      );
    },
    filename: (req, file, cb) => {
      file.key = `${Date.now()}-${file.originalname}`;

      cb(null, file.key);
    },
  }),
  s3: multerS3({
    s3: new aws.S3({
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      region: process.env.AWS_REGION,
    }),
    bucket: process.env.AWS_BUCKET,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: "public-read",
    key: (req, file, cb) => {
      file.key = `${Date.now()}-${file.originalname}`;
      cb(null, file.key);
    },
  }),
};
const upload = {
  dest: path.resolve(__dirname, "..", "..", "tmp", "uploads"),
  storage: storageTypes[process.env.STORAGE_TYPE],
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      "image/jpeg",
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/webp",
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type."));
    }
  },
};
export default upload;
