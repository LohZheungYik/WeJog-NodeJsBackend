const database = require('../database');

class DailyDataModel {
    constructor() {
        if (this.instance) return this.instance;
        DailyDataModel.instance = this;
    }

    get() { return database.getList('dailyData') }

    getById(id) { return database.get('dailyData', id) }
    
    create(dailyData) { return database.create('dailyData', dailyData) }

    delete(id) { return database.delete('dailyData', id) }

    update(id, dailyData) { return database.set('dailyData', id, dailyData) }
}

module.exports = new DailyDataModel();