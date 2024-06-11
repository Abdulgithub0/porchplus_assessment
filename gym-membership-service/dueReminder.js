const cron = require('node-cron');
const processMemberships = require('./cronService/notifyEngine').processMemberships


// the cron job is schedule to run for midnight everyday
let dailyTime = '* * * *';


// you can uncomment below code to make the cron job run every 50 secs
//dailyTime = '*/50 * * * * *';



// Schedule the cron job to run daily at midnight
function paymentReminderService () {
  cron.schedule(dailyTime,  processMemberships);
  console.log('Membership due reminder service has been scheduled');
}

module.exports = {
  paymentReminderService
}
