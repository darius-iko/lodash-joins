/// <reference path="../references.d.ts" />

import IAccessor = require('./IAccessor');
import IMerger = require('./IMerger');

interface IMergeJoin<L extends Object, R extends Object, A, T extends Object> {
    (left: Array<L>, leftAccessor: IAccessor<L, A>,
     right: Array<R>, rightAccessor: IAccessor<R, A>,
     merger: IMerger<L, R, T>): Array<T>;
}

export = IMergeJoin;
