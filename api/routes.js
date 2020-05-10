'use strict';   // to enforce secure coding practices

const controller = require('./controller');

// export a function to add/register routes for the app
module.exports = function (app) {
    app.route('/products').get(controller.findAll); // retrieve all products
    app.route('/products/:id').get(controller.findOne); // retrieve a single product by id
    app.route('/products').post(controller.create); // create a new product
    app.route('/products/:id').put(controller.update);  // update a product with id
    app.route('/products/:id').delete(controller.delete);   // delete a product with id
};