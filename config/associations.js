import Products from "../models/Products";
import Users from "../models/Users";
import CartItem from "../models/CartItem";
import ProductImages from "../models/ProductImages";

CartItem.hasMany(Products);
CartItem.belongsTo(Users);

ProductImages.belongsTo(Products);
Products.hasMany(ProductImages);

export { Products, Users, CartItem, ProductImages };