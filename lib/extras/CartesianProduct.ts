/// <reference path="../../references.d.ts" />

import _ = require('lodash');

var cartesianProduct: (array: Array<Array<any>>) => Array<any> = (array: Array<Array<any>>) =>
    array.length ?
        _.reduce(array, (a: Array<Array<any>>, b: Array<any>) =>
                _.flatten(_.map(a, (x: Array<any>) =>
                        _.map(b, (y: any) =>
                            x.concat([y]))),
                    true),
            [[]]) :
        [];

export = cartesianProduct;
