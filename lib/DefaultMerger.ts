/// <reference path="../references.d.ts" />

import IMerger = require('./IMerger');

/**
 * The default merger
 * @param {Object} left
 * @param {Object} right
 * @returns {Object}
 * @constructor
 */
var defaultMerger: IMerger<Object, Object, Object> =
    (left: Object, right: Object) =>
        _.assign(new Object(), left, right);
export = defaultMerger;
