const { v4: uuidv4 } = require('uuid');
const BaseEntity = require('./base-entity');

class Product extends BaseEntity {
    constructor(name, price, color) {
        super();
        this.id = uuidv4();
        this.name = name || null;
        this.price = price || 0;
        this.color = color || null;
    }
}

module.exports = Product;