/* global require:true */

'use strict';

var path = require('path');

module.exports = function (modules, callback) {
    function ensureModule(m) {
        var resolved;
        try {
            resolved = require(m);
        }
        catch (moduleError) {
            console.error(moduleError.message);
            console.info('Attempting to locate as a file based on current path...');
            try {
                resolved = require(path.join(path.dirname(process.argv[1]), m));
            }
            catch (modulePathError) {
                console.error(modulePathError.message);
                throw new Error('Not Found');
            }
        }
        return resolved;
    }
    if (Array.isArray(modules)) {
        if (callback) {
            var _modules = [];
            modules.forEach(function (m) {
                _modules.push(ensureModule(m));
            });
            callback.apply(null, _modules);
        }
        else {
            throw new Error('modules array requires callback');
        }
    }
    else {
        return ensureModule(modules);
    }
};
