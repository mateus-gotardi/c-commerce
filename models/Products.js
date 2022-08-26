const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Products = sequelize.define("Products", {
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    bar_code: DataTypes.STRING,
    promotionPrice: DataTypes.FLOAT,
    activePromotion: DataTypes.BOOLEAN,
    description: DataTypes.STRING,
    tags: DataTypes.STRING,
});
export default Products;