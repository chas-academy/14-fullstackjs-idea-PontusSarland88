const express = require('express');
const router = express.Router();
const passport = require('passport');

//Load models
const User = require('../../models/User');
const Product = require('../../models/Product');

// Load Input Validation
const validateProduct = require('../../validation/products');

// @route GET api/products/all
// @desc get all products route
// @access Private
router.get('/all', passport.authenticate('jwt', {session: false}), (req, res) => {
    Product.find()
        .then(products => {
            if(products.length > 0) {
                return res.status(200).json(products);
            } else {
                return res.status(204).json({error: "Could not find any products"});
            }
        });
});

// @route GET api/products/active
// @desc  get all active products route
// @access public
router.get('/active', (req, res) => {
    Product.find({ 'available': true})
        .then(products => {
            if(products.length > 0) {
                return res.status(200).json(products);
            } else {
                return res.status(500).json({error: 'Could not find any products'});
            }
        });
});

// @route POST api/products/
// @desc  create product route
// @access Private
router.post('/create', passport.authenticate('jwt', {session: false}), (req, res) => {
    
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
            .catch(err => res.json(err));

    } else {
        return res.status(401).json("Not authorized");
    }
});

// @route update api/products/
// @desc  update product route
// @access Private
router.put('/update/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
    if(req.user.role) {

        const { errors, isValid } = validateProduct(req.body);

        if(!isValid) {
            return res.status(400).json(errors);
        }

        const prodId = req.params.id;
        const newProds = {};
        newProds.name = req.body.name;
        newProds.ingredients = req.body.ingredients;
        newProds.description = req.body.description;
        newProds.image = req.body.image;
        newProds.price = req.body.price;
        newProds.weight = req.body.weight;
        newProds.available = req.body.available;
        
        Product.findByIdAndUpdate(prodId, {$set: newProds}, {new: true})
            .then(prod => res.json(prod))
            .catch(err => res.json(err));
    } else {
        return res.status(401).json({err: "Not authorized to do that"});
    }
        
});

// @route delete api/products/
// @desc  delete product
// @access Private
router.delete('/delete', passport.authenticate('jwt', { session: false}), (req, res) => {

})
module.exports = router;