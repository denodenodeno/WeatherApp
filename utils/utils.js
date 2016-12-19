const moment = require('moment');

module.exports.convertTimeToDate = (time) => (moment.unix(time).format('dddd, MMM Do YYYY'));