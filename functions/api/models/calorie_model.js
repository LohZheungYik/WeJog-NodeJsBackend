const database = require('../database');

class CalorieModel {
    constructor() {
        if (this.instance) return this.instance;
        CalorieModel.instance = this;
    }

    get() { return database.getList('calorie') }

    getById(id) { return database.get('calorie', id) }
    
    create(calorie) { return database.create('calorie', calorie) }

    delete(id) { return database.delete('calorie', id) }

    update(id, calorie) { return database.set('calorie', id, calorie) }
}

module.exports = new CalorieModel();