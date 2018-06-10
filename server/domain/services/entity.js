'use strict';

const BaseService = require('./base');
const entityRepository = require('../../dataAccess/repositories/entity');
const EntityModel = require('../models/entity');

class EntityService extends BaseService {
    constructor() {
        super(EntityModel, entityRepository, 'EntityDataModel', true);
    }

    find(userId, isCompleted) {
        const query = isCompleted === undefined ?
            {
                author: userId,
                isDeleted: false
            } :
            {
                author: userId,
                isDeleted: false,
                isCompleted
            };

        return this.findByQuery(query);
    }

    async create(userId, task) {
        return this.create({
            ...task,
            author: userId
        });
    }

    async update(id, task, user) {
        return this.update(id, task, user);
    }

    async delete(id, user) {
        await this.update(id, {
            isDeleted: true
        }, user);
    }
}

module.exports = new EntityService();