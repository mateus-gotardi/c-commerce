const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Users = sequelize.define("Users", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    admin: DataTypes.BOOLEAN,
});
export default Users;