'use strict';

const mapper = require('../../helpers/mapper');
const EntityModel = require('../models/entity');

mapper.createMap('EntityDataModel', EntityModel)
    .forAllMembers(mapper.copyOwnProperties)
    .forMember('id', opts => opts.sourceObject._id);

mapper.createMap(EntityModel, 'EntityDataModel')
    .forAllMembers(mapper.copyProperties)
    .forMember('_id', opts => opts.ignore());

mapper.createMap(EntityModel, 'UpdateEntityDataModel')
    .forAllMembers(mapper.copyProperties)
    .forMember('_id', opts => opts.sourceObject.id)
    .forSourceMember('id', opts => opts.ignore());

mapper.createMap(EntityModel, 'EntityViewModel')
    .forAllMembers(mapper.copyProperties);
