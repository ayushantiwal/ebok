var express = require('express');
var router = express.Router();
var Cart = require("../models/cart");
const stripe = require("stripe")(process.env.SECRET_KEY);

var Product = require("../models/product");
const Order = require("../models/order");

/* GET home page. */
router.get('/', function (req, res, next) {
  var successMsg = req.flash("success")[0];
  Product.find(function (err, docs) {
    var productChunks = [];
    var chunkSize = 3;
    for (var i = 0;i < docs.length;i += chunkSize) {
      productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop/index', { title: 'Ebook Store', products: productChunks, successMsg: successMsg, noMessages: !successMsg });
  });

});

// Add to Cart with Id

router.get("/add-to-cart/:id", function (req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : { items: {} });

  Product.findById(productId, function (err, product) {
    if (err) {
      return res.redirect("/");
    }

    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect("/");
  })
});

// Removing from one by one Cart
router.get("/reduce/:id", function (req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : { items: {} });

  cart.reduceByOne(productId);
  req.session.cart = cart;
  res.redirect("/shopping-cart")
});

// Removing from Cart all by one
router.get("/remove/:id", function (req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : { items: {} });

  cart.removeItem(productId);
  req.session.cart = cart;
  res.redirect("/shopping-cart")
});

// Get Request Of Shopping Cart
router.get("/shopping-cart", function (req, res, next) {
  if (!req.session.cart) {
    return res.render("shop/shopping-cart", { products: null })
  }

  const cart = new Cart(req.session.cart);
  res.render("shop/shopping-cart", { products: cart.generateArray(), totalPrice: cart.totalPrice, stripePublishable: process.env.PUBLISHABLE_KEY })
});


// Stripe Post Request
router.post("/charge", (req, res) => {
  var cart = new Cart(req.session.cart);
  var email = req.body.stripeEmail;
  const amount = cart.totalPrice * 100;

  stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken
  })
    .then(customer => stripe.charges.create({
      amount,
      description: 'Ebook Store',
      currency: 'inr',
      customer: customer.id
    }))
  var date = new Date();
  var stripeToken = req.body.stripeToken
  var order = new Order({
    email: req.body.stripeEmail,
    cart: cart,
    paymentId: stripeToken,
    date: date

  })
  order.save()
    .then(charge => res.redirect("/user/success"))
  req.session.cart = null;

});


router.get("/user/order", function (req, res, next) {
  var Cart = require("../models/cart")
  Order.find({ user: req.email }, function (err, orders) {
    if (err) {
      return res.write("Error");
    }
    var cart;
    orders.forEach(function (order) {
      cart = new Cart(order.cart);
      orders.items = cart.generateArray();
    });
    res.render("user/order", { orders: orders });
  });
});


router.get("/user/success", (req, res) => {
  res.render("shop/success")
});




module.exports = router;
