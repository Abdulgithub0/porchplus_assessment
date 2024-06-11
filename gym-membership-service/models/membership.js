const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/config');

// Model the Membership object
const Membership = sequelize.define('Membership', {
  membership_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  membership_type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  due_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  total_amount: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  member_email_address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  is_first_month: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  invoice_link: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

module.exports = Membership;

