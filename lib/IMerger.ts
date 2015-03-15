/// <reference path="../references.d.ts" />

/**
 * IMerger
 * A functional type interface that takes in two different objects and is able
 * to merge them to produce a different object.
 */
interface IMerger<L extends Object, R extends Object, T extends Object> {
    (left: L, right: R): T;
}

export = IMerger;
