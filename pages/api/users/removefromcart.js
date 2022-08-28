import CartItem from "../../../models/CartItem";
import WithAuth from "../../../src/utils/userAuth";
import nc from "next-connect";

const removeFromCart = nc({
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
    console.log("removing from cart: " + req.body.id);
    await CartItem.destroy({
      where: {
        id: req.body.id,
      },
    });
    res.status(200).json({ message: "product removed successfully" });
  })
  .patch(async (req, res) => {
    throw new Error("error removing item");
  });

export default removeFromCart;
