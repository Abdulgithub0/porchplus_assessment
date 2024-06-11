const { Sequelize } = require('sequelize');
require('dotenv').config();

// create a .env in root project dir of this project and assign your environment variables
// e.g - process.env.DB_NAme refers to your Database name


// Database connection info
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
  }
);

// mail service info
const email = {
  service: process.env.EMAIL_SERVICE,
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASS,
};

module.exports = {
  sequelize,
  email,
};
