const database = require('../database');

class ReminderModel {
    constructor() {
        if (this.instance) return this.instance;
        ReminderModel.instance = this;
    }

    get() { return database.getList('reminders') }

    getById(id) { return database.get('reminders', id) }
    
    create(reminder) { return database.create('reminders', reminder) }

    delete(id) { return database.delete('reminders', id) }

    update(id, reminder) { return database.set('reminders', id, reminder) }
}

module.exports = new ReminderModel();