const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema for Order
const OrderSchema = new Schema({
    cartId: {
        type: Schema.Types.ObjectId, ref: 'carts'
    },
    userId: {
        type: Schema.Types.ObjectId, ref: 'users'
    },
    customerName: {
        type: String,
        required: true
    },
    customerAdress: {
        type: String,
        required: true
    },
    totalSum: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = Order = mongoose.model('orders', OrderSchema);