'use strict';   // to enforce secure coding practices

const controller = require('./controller');

// export a function to add/register routes for the app
module.exports = function (app) {
    app.route('/get')
        .get(controller.get);
    app.route('/get/:id')
        .get(controller.get);
    // app.route('/distance/:zipcode1/:zipcode2')
    //     .get(controller.getDistance);
};