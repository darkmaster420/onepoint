const op = require('./core/op');
const app = require('./core/app');

const { MODULES, THEMES } = require('./conf/sys-config');

const { modules, themes } = op;

MODULES.forEach((k) => {
    modules[k] = require(`./routers/${k}.js`);
});

THEMES.forEach((k) => {
    themes[k] = require(`./views/js/${k}.js`);
});

const header = require('./middleware/header');
const template = require('./middleware/template');
const admin = require('./middleware/admin');
const invokeModule = require('./middleware/invoke-module');
const logger = require('./utils/logger');

// fake koa app
app.use(header);
app.use(template);
app.use(admin);
app.use(require('./middleware/access-control'));
app.use(require('./middleware/page-control'));
app.use(require('./middleware/cache-control'));
app.use(invokeModule);

module.exports = {
    initialize(starter) {
        op.initialize(starter);
    },
    async _handle(req) {
        if (op.config.version === -1) {
            // ? Indicates that the settings are not loaded. Try to load. If the loading fails, the default configuration will be automatically used.
            await op.readConfig();
        }
        return app.handleRequest(req).then(({ response }) => {
            if (typeof response.status !== 'number' || typeof response.headers !== 'object' || typeof response.body !== 'string') {
                throw new Error('Internal Response Error');
            }
            return response;
        });
    },
    async handleRequest(req) {
        return this._handle(req).catch((err) => {
            // The errors encountered in this step are generally request errors, format errors, inability to parse, etc.
            logger.error(err);
            return {
                status: 500,
                headers: {
                    'access-control-allow-origin': '*',
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ error: 'InternalError', message: err.message }),
            };
        });
    },
};
