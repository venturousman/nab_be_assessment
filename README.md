# NAB Backend Assessment
NAB Backend Assessment For Experienced NodeJS Engineer V1

**Code structure:**
- api folder: contains files that will support the API
- api/test folder: contains test files
- services folder: is for the logic to connect to a third-party API or our other microservices (auth, order, ...)

**Middleware modules**
```
"axios": Promise based HTTP client for the Browser and Node.js
"body-parser": Parse incoming request bodies in a middleware before your handlers, available under the req.body property
"express": Fast, unopinionated, minimalist web framework for Node.js
"mocha": Simple, flexible, fun JavaScript test framework for Node.js & the Browser
"swagger-ui-express": This module allows you to serve auto-generated swagger-ui generated API docs from express, based on a swagger.json file.
"uuid": For the creation of RFC4122 UUIDs
"chai": An assertion library
```

**All the required steps in order to get the applications run on local computer**
```
npm install
npm start
```

**Test the APIs**
```
npm test
```

**CURL commands to verify the APIs**
- get list of products with sorting, paging 
```
curl --location --request GET 'localhost:3000/products?sortBy=price&orderBy=asc&pageNumber=2&pageSize=2'
```
- get product by id
```
curl --location --request GET 'localhost:3000/products/f69b42da-b4c2-4ec8-a467-3ce90ead6f8c'
```
- create a new product
```
curl --location --request POST 'localhost:3000/products' \
--header 'Content-Type: application/json' \
--data-raw '{
	"name": "product 6x",
	"price": 10.4
}'
```
- update a product
```
curl --location --request PUT 'localhost:3000/products/a96a487b-1dbc-4568-849a-87935ec5cb59' \
--header 'Content-Type: application/json' \
--data-raw '{
	"name": "product 2x",
	"price": 10.39
}'
```
- delete a product
```
curl --location --request DELETE 'localhost:3000/products/f69b42da-b4c2-4ec8-a467-3ce90ead6f8c' \
--header 'Content-Type: application/json' \
--data-raw '{
	"name": "product 2x",
	"price": 10.39
}'
```