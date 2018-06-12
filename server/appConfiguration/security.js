'use strict';

const jwt = require('koa-jwt');
const secret = process.env.JWT_SECRET;
const { unauthorized } = require('../constants').STATUS_CODES;

module.exports = (app) => {
    app.use((ctx, next) => {
        return next().catch((err) => {
            if (err.status === unauthorized) {
                ctx.status = unauthorized;
                ctx.body = 'Protected resource, use Authorization header to get access\n';
            } else {
                throw err;
            }
        });
    });
    app.use(jwt({
        secret
    }));
};