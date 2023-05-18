'use strict';

class Collection{
  constructor(model){
    this.model = model;
  }

  async create(data){
    try {
      let records = await this.model.create(data);
      return records;

    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

module.exports = Collection;
