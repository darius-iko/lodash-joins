/// <reference path="../../references.d.ts" />

import _ = require('lodash');

var undefined: (obj: any, fn: (obj: any) => any) => any =
    (obj: any, fn: (obj: any) => any) =>
        _.isUndefined(obj) ? obj : fn(obj);

export = undefined;
