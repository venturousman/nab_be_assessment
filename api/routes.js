'use strict';   // to enforce secure coding practices

const controller = require('./controller');

// export a function to add/register routes for the app
module.exports = function (app) {
    app.route('/about')
        .get(controller.about);
    // app.route('/distance/:zipcode1/:zipcode2')
    //     .get(controller.getDistance);
};