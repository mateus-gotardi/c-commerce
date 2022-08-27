const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const CartItem = sequelize.define("CartItems", {
    userid: DataTypes.STRING,
    productid: DataTypes.STRING,
});
export default CartItem;