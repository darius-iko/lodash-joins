/// <reference path="../references.d.ts" />

import IAccessor = require('./IAccessor');

/**
 * The default accessor
 * @param {Object} datum
 * @returns {Object}
 */
var defaultAccessor: IAccessor<Object, Object> =
    (datum: Object) =>
        datum;
export = defaultAccessor;

