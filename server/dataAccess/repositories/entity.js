'use strict';

const dbContext = require('../../dataAccess/context');
const BaseRepository = require('./base');

class EntityRepository extends BaseRepository {
    constructor() {
        super(dbContext, 'Entity');
    }
}

module.exports = new EntityRepository();