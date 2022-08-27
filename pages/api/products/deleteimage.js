import ProductImages from "../../../models/ProductImages";

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      await ProductImages.destroy({
        where: {
          id: req.body.id,
        },
      });
      res.status(200).json({message: "image deleted successfully"});
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  } else {
    res.status(400).json({ error: true, message: "invalid req method" });
  }
};
