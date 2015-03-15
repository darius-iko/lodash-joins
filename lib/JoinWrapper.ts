
import IJoin = require('./IJoin');
import IMergeJoin = require('./IMergeJoin');

/**
 * A utility wrapper for join functions
 * @param {Function} joinFn a join function
 * @return {*[]}
 */
var joinWrapper: (joinFn: IJoin|IMergeJoin) => IJoin|IMergeJoin =
    (joinFn: IJoin|IMergeJoin) => {
        return joinFn;
    };














//    (joinFn: IJoin|IMergeJoin) {
//    return function (a, aAccessor, b, bAccessor) {
//        if (!a) {
//            throw new Error('Missing required left array');
//        } else if (!aAccessor) {
//            throw new Error('Missing required left accessor');
//        }
//        if (!b) {
//            b = a;
//        }
//        if (!bAccessor) {
//            bAccessor = aAccessor;
//        }
//        return joinFn(a, aAccessor, b, bAccessor);
//    };
//};
//
//module.exports = joinWrapper;
