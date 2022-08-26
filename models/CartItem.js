const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const CartItem = sequelize.define("CartItem", {
    userId: DataTypes.STRING,
    productId: DataTypes.STRING,
});
export default CartItem;