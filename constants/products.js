const Product = require('../models/product');

const products = [
    new Product('product 1', 12.25, 'red'),
    new Product('product 2', 10.3, 'green'),
    new Product('product 3', 2.85, 'blue'),
    new Product('product 4', 8, 'yellow'),
    new Product('product 5', 7.45, 'red'),
];

module.exports = products;