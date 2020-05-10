'use strict';

const products = require('../constants/products');
const Product = require('../models/product');

const controller = {
    findAll: function (req, res) {
        const { params: { pageNumber, pageSize, orderMethod } } = req;
        let items = products.filter(x => !x.isDeleted);
        res.json(items);
    },
    findOne: function (req, res) {
        const { params: { id } } = req;
        let product = products.find(x => x.id === id && !x.isDeleted);
        if (product)
            res.json(product);
        res.json('not found');
    },
    create: function (req, res) {
        const { body: { name, price } } = req;
        let newProduct = new Product(name, price);
        newProduct.createdDate = new Date();
        products.push(newProduct);
        res.json(newProduct);
    },
    update: function (req, res) {
        const { params: { id }, body: { name, price } } = req;
        let existingProduct = products.find(x => x.id === id);
        if (existingProduct) {
            existingProduct.name = name;
            existingProduct.price = price;
            existingProduct.updatedDate = new Date();
        }
        res.json(existingProduct);
    },
    delete: function (req, res) {
        const { params: { id } } = req;
        // hard delete
        // let index = products.findIndex(x => x.id === id);
        // let removedProducts = products.splice(index, 1);
        // res.json(removedProducts);

        // soft delete
        let existingProduct = products.find(x => x.id === id);
        if (existingProduct) {
            existingProduct.isDeleted = true;
            existingProduct.updatedDate = new Date();
        }
        res.json(existingProduct);
    },
};

module.exports = controller;