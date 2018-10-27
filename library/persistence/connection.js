'use strict';

const sqlite = require('sqlite3').verbose();
const EventEmitter = require('events').EventEmitter;

class Connection {
    constructor() {
        this.db = undefined;
        this.events = new EventEmitter();
    }

    on($event, $function) {
        this.events.addListener($event, $function);
    }

    off($event, $function) {
        this.events.removeListener($event, $function);
    }

    offAll($event) {
        this.events.removeAllListeners($event);
    }
    
    open(file = ':memory:') {
        if (file === ':memory:') {
            this.openInMemory();
        } else {
            this.openInFile(file);
        }
    }

    openInMemory() {
        this.db = new sqlite.Database(':memory:', ((error) => {
            if (error) {
                this.db = undefined;
                this.events.emit('error', error);
                return void 0;
            }
            this.events.emit('connect');
        }));
    }

    openInFile(file) {        
        this.db = new sqlite.Database(file, sqlite.OPEN_READWRITE, ((error) => {
            if (error) {
                this.db = undefined;
                this.events.emit('error', error);
                return void 0;
            }
            this.events.emit('connect');
        }));
    }

    close() {
        this.db.close();
        this.db = undefined;
        this.events.emit('disconnect');
    }

    isConnected() {
        return  this.db !== undefined;
    }

    run(sql, parameters = undefined) {
        if(parameters === undefined) {
            this.db.run(sql, ((error) => {
                if (error) {
                    this.db = undefined;
                    this.events.emit('error', error);
                    return void 0;
                }
                this.events.emit('run');
            }));
        } else {
            this.db.run(sql, parameters, ((error) => {
                if (error) {
                    this.db = undefined;
                    this.events.emit('error', error);
                    return void 0;
                }
                this.events.emit('run');
            }));
        }
    }
}

module.exports = Connection;
