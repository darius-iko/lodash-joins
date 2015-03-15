/// <reference path="../references.d.ts" />

/**
 * IAccessor
 * A functional type interface that takes in a datum object and returns
 * the key for that object.  Similarly known as a `pluck` function.
 */
interface IAccessor<O extends Object, A> {
    (datum: O): A;
}

export = IAccessor;
