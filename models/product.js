const { v4: uuidv4 } = require('uuid');
const BaseEntity = require('./base-entity');

class Product extends BaseEntity {
    constructor(name, price) {
        super();
        this.id = uuidv4();
        this.name = name || null;
        this.price = price || 0;
    }
}

module.exports = Product;