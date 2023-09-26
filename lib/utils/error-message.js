const e = {
    ItemNotExist({ path }) {
        return `Folder${path || '?'}does not exist`;
    },
    Unauthorized({ field, type }) {
        let s = '';
        if (type === 'empty') {
            s = 'Is empty, please enter and try again';
        } else if (type === 'invalid') {
            s = 'Expired or illegal, please re-certify';
        } else if (type === 'wrong') {
            s = 'There is an error, please re-enter';
        }
        return `Field${field}${s}`;
    },
    CommandNotAllowed({ command }) {
        return `Command ${command} Is not supported yet`;
    },
    DriveNotExist({ path }) {
        return `There is no cloud disk configured under ${path}`;
    },
    ModuleNotExist({ module }) {
        return `module${module}does not exist`;
    },
    InvalidPage({ page }) {
        return `Page ${page} parameters are illegal`;
    },
    ItemIsFile({ path }) {
        return `Path ${path || '?'} Corresponds to a file, please pay attention to the path format`;
    },
    ConfigError({ fields }) {
        return `The parameter configuration is incorrect. Please pay attention to these parameters.[${fields.toString()}]`;
    },
    ModuleError(msg) {
        return `module internal error: ${msg || '???'}`;
    },
    ReadError({ msg }) {
        return `Configuration read failed: ${msg}`;
    },
    SaveError({ msg }) {
        return `Configuration save failed: ${msg}`;
    },
    default(type) {
        return `An error occurred ${type || '?'}`;
    },
};

module.exports.parseErrorMsg = function (type, data) {
    return e[type] ? e[type](data) : e.default(type);
};
