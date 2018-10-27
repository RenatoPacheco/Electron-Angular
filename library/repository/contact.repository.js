'use strict';

const EventEmitter = require('events').EventEmitter;

class ContactRepository {
    constructor(connection) {
        this.connection = connection;
        this.events = new EventEmitter();
    }
}

module.exports = ContactRepository;