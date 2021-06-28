
var reduce = require('./reduce');
var add = require('./add');

module.exports = function sum(arr) {
    return reduce(arr, add);
}