import Products from "../../../models/Products";
import ProductImages from "../../../models/ProductImages";
import CartItem from "../../../models/CartItem";

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      await ProductImages.destroy({
        where: {
          productid: req.body.id,
        },
      });
      await CartItem.destroy({
        where: {
          productid: req.body.id,
        },
      });
      await Products.destroy({
        where: {
          id: req.body.id,
        },
      });
      res.status(201).json({ message: "Product deleted successfully" });
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  } else {
    res.status(400).json({ error: true, message: "invalid req method" });
  }
};
