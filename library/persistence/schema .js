'use strict';

module.exports = {
    contact : `
        CREATE TABLE contact (
            id integer PRIMARY KEY,
            firstName text NULL,
            lastName text NULL,
            email text NULL,
            phone text NULL,
            comments text NULL,
            createDate text NULL,
            updateDate text NULL
        );`
};
