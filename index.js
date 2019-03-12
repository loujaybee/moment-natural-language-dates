
const moment = require('moment');

const input = "7 seconds";
const output = 7000;

const now = moment();
const now1 = moment();

const func = (arg) => {
    const [num, value] = arg.split(' ');
    return now.diff(now1.subtract(num, value), 'milliseconds');
};

console.log(input);
console.log(output);
console.log(func(input) === output);
