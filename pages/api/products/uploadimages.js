import ProductImages from "../../../models/ProductImages";
import nc from "next-connect";
import upload from "../../../src/utils/upload";
import multer from "multer";

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
})
  .use(multer(upload).single("file"))
  .post(async (req, res) => {
    const obj = JSON.parse(req.body.info);
    const { productid, alt } = obj;
    let link = req.file.key;
    const productImage = await ProductImages.create({
      productid,
      alt,
      link,
    });
    if (productImage) {
      return res.status(200).json({ success: true, productImage });
    } else {
      return res
        .status(400)
        .json({ error: true, message: "error saving on database" });
    }
  })
  .patch(async (req, res) => {
    throw new Error("error saving images");
  });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
