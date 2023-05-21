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
        let record = await this.model.findByPk(params);
        return record;
      } else {
        let records = await this.model.findAll();
        return records;
      }
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async findAllWith(model){
    try {
      let record = await this.model.findAll({include: {
        model: model,
      },
      });
      return record;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async findOneWith(params, model){
    try {
      let record = await this.model.findAll({
        where: {id: params},
        include: {model: model},
      });
      return record;

    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async update(data, params) {
    try {
      let record = await this.model.update(data, { where: { id: params } });
      return record;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async delete(params){
    try {
      let record = await this.model.destroy({ where: { id: params } });
      return record;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

module.exports = Collection;
