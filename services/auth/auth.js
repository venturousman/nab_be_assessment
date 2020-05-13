
// demonstrate the communication with Auth service by calling API
// const https = require('https');  // can use built-in library of Node: https
const axios = require('axios');  // or use 3rd party library: axios

var auth = {
    login: function (req, res, next) {
        // TBD
        // call the auth service API to authenticate and get back token
        // https.post('https://authentication-service')
        const info = {
            username: 'user1@email.com',
            password: 'some_hashed_password'
        };

        axios.post('https://authentication-service/login', info)
            .then((res) => {
                console.log(`statusCode: ${res.statusCode}`)
                console.log(res)
            })
            .catch((error) => {
                console.error(error)
            });
    },
    logout: function (req, res, next) {
        // TBD
    }
};

module.exports = auth;