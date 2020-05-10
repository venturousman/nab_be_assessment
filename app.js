// import modules
const express = require('express');
const bodyParser = require('body-parser');
const swagger = require('swagger-ui-express');

// import files
const routes = require('./api/routes');
const apiDocument = require('./api/docs.json');

// configuration
const port = process.env.PORT || 3000;

const app = express();  // create a new app

// === configure routes
routes(app);

// === configure middleware modules
app.use('/api-docs', swagger.serve, swagger.setup(apiDocument));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// === listen at the port
app.listen(port, function () {
    console.log('Server started on port: ' + port);
});