const express = require('express')
const routes = require('./api/routes');

const port = process.env.PORT || 3000;

const app = express();  // create a new app
routes(app);
app.listen(port, function () {
    console.log('Server started on port: ' + port);
});