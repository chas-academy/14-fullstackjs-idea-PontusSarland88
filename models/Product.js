const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema for product
const ProductSchema =  new Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
    weight: {
        type: Number
    },
    available: {
        type: Boolean,
        default: true,
        required: true
    }
});

module.exports = Product = mongoose.model('products', ProductSchema);