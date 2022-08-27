import Products from "../../../models/Products";
import ProductImages from "../../../models/ProductImages";

export default async (req, res) => {
  if (req.method === "GET") {
    try {
      let products = await Products.findAll()
      let productImages = await ProductImages.findAll()
      return res.status(200).json({products, productImages});
    } catch (error) {
      console.log(error);
      res.status(400).json(error)
    }
  } else {
    res.status(400).json({ error: true, message: "invalid req method" });
  }
};