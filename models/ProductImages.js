import aws from "aws-sdk";
const { promisify } = require("util");
const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const s3 = new aws.S3();
const ProductImages = sequelize.define("ProductImages", {
  link: DataTypes.STRING,
  productid: DataTypes.INTEGER,
  alt: DataTypes.STRING,
});

ProductImages.addHook("beforeDestroy", (item, options) => {
  console.log("beforeDestroy", item)
  if (process.env.STORAGE_TYPE === "s3") {
    s3.deleteObject({
      Bucket: process.env.AWS_BUCKET,
      Key: key,
    }).promise();
  } else {
    return promisify(fs.unlink)(
      path.resolve(
        __dirname,
        "..",
        "..",
        "..",
        "..",
        "..",
        "public",
        "upload",
        "products",
        key
      )
    );
  }
});
export default ProductImages;
