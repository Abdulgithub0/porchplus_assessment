const { sequelize } = require('../config/config');
const Membership = require('./membership');

// create the membership table on fitness_plus database and map sequelize Membership object to it.
sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch(err => console.log(err));

module.exports = {
  Membership
};

