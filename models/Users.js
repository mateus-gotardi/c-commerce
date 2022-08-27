import bcrypt from "bcryptjs";
const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Users = sequelize.define("Users", {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  admin: DataTypes.BOOLEAN,
});
Users.prototype.isCorrectPassword = function (password, callback) {
  bcrypt.compare(password, this.password, function (err, same) {
    if (err) {
      callback(err);
    } else {
      callback(err, same);
    }
  });
};
export default Users;
