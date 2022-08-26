import ProductImages from "../../../models/ProductImages";
import nc from "next-connect";
import upload from "../../../src/components/utils/upload";

const handler = nc()
  .use(upload.single("file"))
  .post(async (req, res) => {
    const { productId, alt } = req.body;
    res.json({ hello: "world" });
  })
  .patch(async (req, res) => {
    throw new Error("error saving images");
  });

export default handler;
