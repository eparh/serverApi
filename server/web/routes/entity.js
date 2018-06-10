'use strict';

const taskController = require('../controllers/entity');
const BaseRoute = require('./base');
const validateTaskCreateInfo = require('../validators/entity/validateCreateInfo');
const validateTaskUpdateInfo = require('../validators/entity/validateUpdateInfo');
const validateTaskGetInfo = require('../validators/entity/validateGetInfo');
const validateIdParam = require('../validators/entity/validateIdParam');
const jwt = require('../middlewares/security/jwt');

class EntityRoute extends BaseRoute {
    constructor() {
        super(taskController);
    }

    get(router) {
        const { validator } = this;

        router.prefix('/entities');
        router.use(jwt);

        router.get('/', validator(validateTaskGetInfo), this.registerHandler('get'));
        router.get('/:id', validator(validateIdParam), this.registerHandler('findById'));
        router.post('/', validator(validateTaskCreateInfo), this.registerHandler('create'));
        router.put('/:id', validator(validateTaskUpdateInfo, validateIdParam), this.registerHandler('update'));
        router.delete('/:id', validator(validateIdParam), this.registerHandler('delete'));
    }
}

module.exports = new EntityRoute();
