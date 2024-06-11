const express = require('express');
const bodyParser = require('body-parser');
const membershipRoutes = require('./routes/membershipRoutes');
const { sequelize }= require('./config/config');
const paymentReminderService = require('./dueReminder').paymentReminderService

const app = express();
const port = process.env.SERVER_PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes in routes directory
app.use('/memberships', membershipRoutes);


// Start server
app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  
  // Test database connection
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }

  // launch the cron reminder service
  paymentReminderService()
});

