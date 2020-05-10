# nab_be_assessment
NAB Backend Assessment For Experienced NodeJS Engineer V1

**code structure:**
- api folder: contains files that will support the API
- services folder: is for the logic to connect to a third-party API or our other microservices (auth, order, ...)

**All the required steps in order to get the applications run on local computer**
```
npm install
npm start
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