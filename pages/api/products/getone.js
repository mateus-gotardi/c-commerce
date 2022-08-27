import Products from "../../../models/Products";
import ProductImages from "../../../models/ProductImages";

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      let product = await Products.findByPk(req.body.id);
      let productImages = await ProductImages.findAll({
        where: { productid: req.body.id },
      });
      return res.status(200).json({ product, productImages });
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  } else {
    res.status(400).json({ error: true, message: "invalid req method" });
  }
};
