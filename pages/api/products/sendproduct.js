import Products from "../../../models/Products";

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      console.log("req nom", req.body);
      let { name, price, description, bar_code, tags } = req.body;
      const product = await Products.create({
        name,
        price,
        description,
        bar_code,
        tags,
      });
      return res.status(200).json(product);
    } catch (error) {
      console.log(error);
    }
  }
};
