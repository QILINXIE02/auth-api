'use strict';

class DataCollection {
  constructor(model) {
    this.model = model;
  }

  async get(id) {
    if (id) {
      const record = await this.model.findOne({ where: { id } });
      return { count: record ? 1 : 0, results: record ? [record] : [] };
    } else {
      const records = await this.model.findAll({});
      return { count: records.length, results: records };
    }
  }

  create(record) {
    return this.model.create(record);
  }

  async update(id, data) {
    const record = await this.model.findOne({ where: { id } });
    if (record) {
      await record.update(data);
      return record;
    }
    return null;
  }

  delete(id) {
    return this.model.destroy({ where: { id } });
  }
}

module.exports = DataCollection;
