const expect = require('chai').expect;
const axios = require('axios');

const server = require('../../app');
const products = require('../../constants/products');

describe('server', function () {
    before(function () { });

    after(function () {
        server.close();
    });

    it('Try to get all products', function (done) {
        axios.get('http://localhost:3000/products')
            .then(function (response) {
                // handle success
                expect(response.data).to.deep.equal(products);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
                done();
            });
    });
});
