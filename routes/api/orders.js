const express = require('express');
const router = express.Router();
const passport = require('passport');

// Load models
const User = require('../../models/User');
const Order = require('../../models/Order');
const Product = require('../../models/Product');

// Load input validation
const validateOrderInput = require('../../validation/order');

// @route POST api/orders/create
// @desc create order route
// @access Private
router.post('/create', passport.authenticate('jwt', {session: false}), (req, res) => {
    // get cookie (orderRows)
    // get product name instead of coockie id
    // get product price
    // calculate total price
    // Get adress etc from user input (req.body...)
    // save Order

    //TODO: get real cookie or localstorage and check if valid!
    const myCookie = [
        {
            productName: "Pralin 1",
            price: 22,
            quantity: 5
        },
        {
            productName: "Pralin 2",
            price: 25,
            quantity: 2
        }
    ];

    const { errors, isValid } = validateOrderInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    let sum = 0;
    for (let i = 0; i < myCookie.length; i++) {
        sum += myCookie[i].price * myCookie[i].quantity;        
    }

    const userOrder = new Order({
        userId: req.user.id,
        orderedProducts: myCookie,
        customerName: req.body.customerName,
        street: req.body.street,
        zip: req.body.zip,
        city: req.body.city,
        email: req.body.email,
        totalSum: sum
    });
    userOrder.save()
        .then(order => res.json(order))
        .catch(err => res.json(err));


});

module.exports = router;