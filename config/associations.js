import Products from "../models/Products";
import Users from "../models/Users";
import CartItem from "../models/CartItem";
import ProductImages from "../models/ProductImages";

Users.hasMany(CartItem, {
  onDelete: "CASCADE",
  onIpdate: "CASCADE",
  as: "cart",
});
CartItem.belongsTo(Users, {
  foreingKey: "userid",
  as: "user",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Products.hasMany(CartItem, { onDelete: "CASCADE", onUpdate: "CASCADE" });

Products.hasMany(ProductImages, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  as: "image",
});

ProductImages.belongsTo(Products, {
  foreingKey: "productid",
  as: "product",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

export { Products, Users, CartItem, ProductImages };
