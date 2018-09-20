const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema for Cart
const CartSchema = new Schema({
    orderRows: [{type: Schema.Types.ObjectId, ref: 'orderRows'}]
});

module.exports = Cart = mongoose.model('carts', CartSchema);