'use strict';

class Collection {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      let records = await this.model.create(data);
      return records;

    } catch (error) {
      console.error(error);
      return error;
    }
  }


  async find(params) {
    try {
      if (params) {
        let record = await this.model.findAll({ where: { id: params } });
        return record;
      } else {
        let records = await this.model.findAll();
        return records
      }

    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

module.exports = Collection;
