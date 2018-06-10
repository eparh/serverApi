'use strict';

const mapper = require('../../helpers/mapper');
const entityService = require('../../domain/services/entity');
const EntityModel = require('../../domain/models/entity');

class EntityController {
    async findById(ctx) {
        const id = ctx.params.id;

        const task = await entityService.findById(id);

        return mapper.map(EntityModel, 'EntityViewModel', task);
    }

    async get(ctx) {
        const userId = ctx.state.user.id;
        const { isCompleted } = ctx.request.query;
        const tasks = await entityService.findTasks(userId, isCompleted);

        return mapper.mapArray(EntityModel, 'EntityViewModel', tasks);
    }

    async create(ctx) {
        const task = ctx.request.body;
        const userId = ctx.state.user.id;

        const createdTask = await entityService.create(userId, task);

        return mapper.map(EntityModel, 'EntityViewModel', createdTask);
    }

    async update(ctx) {
        const { id } = ctx.params;
        const task = ctx.request.body;
        const user = ctx.state.user;

        const updatedTask = await entityService.update(id, task, user);

        return mapper.map(EntityModel, 'EntityViewModel', updatedTask);
    }


    delete(ctx) {
        const { id } = ctx.params;
        const user = ctx.state.user;

        return entityService.delete(id, user);
    }
}

module.exports = new EntityController();