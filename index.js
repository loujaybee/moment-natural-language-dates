
const moment = require('moment');

const input = "7 seconds";
const output = 7000;

const now = moment();
const now1 = moment();

const index = (arg) => {
    const [num, value] = arg.split(' ');
    return now.diff(now1.subtract(num, value), 'milliseconds');
};

module.exports = index;
