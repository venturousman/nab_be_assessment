'use strict';

const products = require('../constants/products');
const Product = require('../models/product');

function dynamicSort(property, order) {
    let sort_order = 1;
    if (order === 'desc') {
        sort_order = -1;
    }
    return function (a, b) {
        // a should come before b in the sorted order
        if (a[property] < b[property]) {
            return -1 * sort_order;
            // a should come after b in the sorted order
        } else if (a[property] > b[property]) {
            return 1 * sort_order;
            // a and b are the same
        } else {
            return 0 * sort_order;
        }
    }
}

const controller = {
    findAll: function (req, res) {
        const { query: { pageNumber, pageSize, sortBy, orderBy } } = req;
        let items = products.filter(x => !x.isDeleted);
        if (sortBy && orderBy) {
            // sortBy is field name
            // orderBy can be 'desc' or 'asc'
            items = items.sort(dynamicSort(sortBy, orderBy));
        }
        if (pageNumber && pageSize) {
            items = items.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
        }
        res.json(items);
    },
    findOne: function (req, res) {
        const { params: { id } } = req;
        let existingProduct = products.find(x => x.id === id && !x.isDeleted);
        if (!existingProduct) {
            res.status(404).json({
                status: 'error',
                message: 'Product with the specified id does not exists',
            });
        }
        res.json(existingProduct);
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
        if (!existingProduct) {
            res.status(404).json({
                status: 'error',
                message: 'Product with the specified id does not exists',
            });
        }
        existingProduct.name = name;
        existingProduct.price = price;
        existingProduct.updatedDate = new Date();
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
        if (!existingProduct) {
            res.status(404).json({
                status: 'error',
                message: 'Product with the specified id does not exists',
            });
        }
        existingProduct.isDeleted = true;
        existingProduct.updatedDate = new Date();
        res.json(existingProduct);
    },
};

module.exports = controller;