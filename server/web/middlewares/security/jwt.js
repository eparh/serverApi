'use strict';

const koaJwt = require('koa-jwt');

const secret = process.env.JWT_SECRET;

module.exports = koaJwt({
    secret
});