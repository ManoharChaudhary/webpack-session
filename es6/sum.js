
// sum.js
import add from './add.js';
import reduce from './reduce.js';

export default function sum(arr) {
    return reduce(arr, add);
}

