const express = require("express");
const User = require("../Schemas/User");
const Cart = require("../Schemas/cart");
const fetchuser = require("../Middleware/Fetchuser");
const cart = require("../Schemas/cart");
const router = express.Router();

router.post("/cartproduct", async (req, res) => {
  const {
    product_id,
    user_id,
    product_title,
    product_image,
    product_description,
    product_price,
    count,
  } = req.body;
  try {
    const user = await User.findById(user_id);
    if (!user) {
      return res.status(400).send("User not found");
    }
    const cart=await Cart.findOne({product:req.body.product_id})
    // console.log(cart);
    if(cart){
        res.status(400).send({ message:"Product Is already Added"});
     
    }
    else {
        const newCart = new Cart({
          user: user_id,
          product: product_id,
          title: product_title,
          price: product_price,
          description: product_description,
          image: product_image,
          count: count,
        });
        await newCart.save();
    
        res.send({ message: "Product added successfully", cart: newCart });
    }
  } catch (error) {
    // console.error(error);
    res.status(500).send({ error });
  }
});

router.get("/display", fetchuser, async (req, res) => {
  try {
    const carts = await Cart.find({ user: req.user.id });
    res.json(carts);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
router.delete("/cart/:id", async (req, res) => {
  try {
    let cart = await Cart.findById(req.params.id);
   
    if (!cart) {
      return res.status(404).send("Cart not found");
    }

    if (cart.notes && cart.notes.toString() !== req.cart.id) {
      return res.status(401).send("Not allowed");
    }
    const cartId = req.params.id;
    await Cart.findByIdAndDelete(cartId);
    res.json({ success: "Cart deleted successfully", cartId });
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Internal server error");
  }
});

module.exports = router;
