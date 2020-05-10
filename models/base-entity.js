class BaseEntity {
    constructor() {
        this.createdDate = null;
        this.createdBy = null;
        this.updatedDate = null;
        this.updatedBy = null;
        this.isDeleted = false;
    }
}

module.exports = BaseEntity;