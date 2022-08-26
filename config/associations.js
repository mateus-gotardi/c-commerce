import Products from "../models/Products";
import Users from "../models/Users";
import CartItem from "../models/CartItem";
import ProductImages from "../models/ProductImages";

CartItem.hasMany(Products);
CartItem.belongsTo(Users);

ProductImages.belongsTo(Products, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Products.hasMany(ProductImages, { onDelete: "CASCADE", onUpdate: "CASCADE" });

export { Products, Users, CartItem, ProductImages };
