const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const ProductImages = sequelize.define("ProductImages", {
    link: DataTypes.STRING,
    productid: DataTypes.INTEGER,
    alt: DataTypes.STRING,
});
export default ProductImages;