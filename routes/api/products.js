const express = require('express');
const router = express.Router();
const passport = require('passport');

//Load models
const User = require('../../models/User');
const Product = require('../../models/Product');

// @route GET api/products/test
// @desc Tests products route
// @access Public
router.get('/test', (req, res) => res.json({msg: "Products Works"}));

// @route GET api/products/
// @desc  return all products
// @access Private


// @route POST api/products/
// @desc  create product
// @access Private
router.post('/create',  passport.authenticate('jwt', {session: false}), (req, res) => {
    
    const user = req.user;

    // Check if user has admin rights
    if(user.role) {
        const newProd = new Product({
            name: req.body.name,
            ingredients: req.body.ingredients,
            description: req.body.description,
            image: req.body.image,
            price: req.body.price,
            weight: req.body.weight,
            available: req.body.available
        });
        newProd.save()
            .then(product => res.json(product))
            .catch(err => console.log(err)); debugger;

    } else {
        console.log("You do not have the power to do that!");
    }
});

module.exports = router;