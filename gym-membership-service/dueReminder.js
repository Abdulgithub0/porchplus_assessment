const cron = require('node-cron');
const processMemberships = require('./cronService/notifyEngine').processMemberships

//schedule time
const dailyTime = '*/50 * * * * *'

// Schedule the cron job to run daily at midnight
function paymentReminderService () {
  cron.schedule(dailyTime,  processMemberships);
  console.log('Membership due reminder service has been scheduled');
}

module.exports = {
  paymentReminderService
}
