const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    product: {
        type: String,
        required: true
    },
    sold_amount: {
        type: Number,
        required: true
    },
    unit_price: {
        type: Number,
        required: true
    },
    revenue: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5  
    }
});

const ProductModel = mongoose.model('Product', ProductSchema);

module.exports =
 {
    ProductModel

 }