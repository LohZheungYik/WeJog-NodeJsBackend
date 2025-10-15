const database = require('../database');

class BloodPressureModel {
    constructor() {
        if (this.instance) return this.instance;
        BloodPressureModel.instance = this;
    }

    get() { return database.getList('bloodPressure') }

    getById(id) { return database.get('bloodPressure', id) }
    
    create(bloodPressure) { return database.create('bloodPressure', bloodPressure) }

    delete(id) { return database.delete('bloodPressure', id) }

    update(id, bloodPressure) { return database.set('bloodPressure', id, bloodPressure) }
}

module.exports = new BloodPressureModel();