'use strict';

const BaseSchema = require('./base');

class EntitySchema extends BaseSchema {
    get() {
        const {
            Schema, ofType, required, objectRef, withTimeStamps, includeVirtuals
        } = this;

        return new Schema({
            id: required(objectRef('User')),
            name: required(ofType(String))
        },
        withTimeStamps(includeVirtuals())
        );
    }
}

module.exports = EntitySchema;