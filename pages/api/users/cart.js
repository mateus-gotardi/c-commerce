import CartItem from "../../../models/CartItem";
import WithAuth from "../../../src/utils/userAuth";
import nc from "next-connect";

const cartHandler = nc({
  onError: (err, req, res, next) => {
    console.error(err);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
})
  .use(WithAuth)
  .post(async (req, res) => {
    let user = req.user;
    let { productid } = req.body;
    const cartItem = await CartItem.create({
      productid: productid,
      userid: user.id,
    });
    if (cartItem) {
      res.status(200).json({ message: "item added to cart" });
    } else {
      res
        .status(400)
        .json({ error: true, message: "error adding item to cart" });
    }
  })
  .get(async (req, res) => {
    try {
      let items = await CartItem.findAll({ where: { userid: req.user.id } });
      return res.status(200).json({ items });
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  })
  .patch(async (req, res) => {
    throw new Error("error adding item to cart");
  });

export default cartHandler;
