/// <reference path="../references.d.ts" />

import IAccessor = require('./IAccessor');

/**
 * IJoin
 * A functional type interface that can take two arrays and join them into a single
 * array.  This interface provides the basis for all join types.  It takes the left & right
 * arrays, along with their accessors and merges them into an array of a new type,
 * which is defined by the merger.  Some joins, may not require a merger as they
 * are not full-joins and produce a filtered left-array.
 */
interface IJoin<L extends Object, R extends Object, A, T extends Object> {
    (left: Array<L>, leftAccessor: IAccessor<L, A>,
     right: Array<R>, rightAccessor: IAccessor<R, A>): Array<T>;
}

export = IJoin;
