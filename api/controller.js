'use strict';

var properties = require('../package.json');

var controller = {
    get: function (req, res) {
        debugger;
        var aboutInfo = {
            name: properties.name,
            version: properties.version
        }
        res.json(aboutInfo);
    },
};

module.exports = controller;