import Products from "../../../models/Products";

export default async (req, res) => {
  if (req.method === "PUT") {
    try {
      console.log("req nom", req.body);
      const { field, id, newValue } = req.body;
      let product;
      switch (field) {
        case "name":
          product = await Products.update(
            { name: newValue },
            { where: { id: id } }
          );
          break;
        case "description":
          product = await Products.update(
            { description: newValue },
            { where: { id: id } }
          );
          break;
        case "price":
          product = await Products.update(
            { price: newValue },
            { where: { id: id } }
          );
          break;
        case "tags":
          product = await Products.update(
            { tags: newValue },
            { where: { id: id } }
          );
          break;
        default:
          break;
      }
      return res.status(200).json(product);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  } else {
    res.status(400).json({ error: true, message: "invalid req method" });
  }
};
