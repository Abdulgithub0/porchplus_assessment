const Membership = require('../models').Membership;
const { Op, Sequelize } = require('sequelize');

/*
 * retrieve  all members  that are 7 days closer to due date or  member whose  due date is today
 * @param {} - void
 * @return [] - an array containing all due membership user object,
 */
const getAllDueMembership = async () => {
  const today = new Date();
  const filterDate = new Date();
  filterDate.setDate(today.getDate() + 7);

  // Format dates to 'YYYY-MM-DD'
  const todayFormatted = today.toISOString().split('T')[0];
  const filterDateFormatted = filterDate.toISOString().split('T')[0];

  try {
    const dueMembership = await Membership.findAll({
      where: {
        [Op.or]: [
          Sequelize.where(
            Sequelize.fn('DATE', Sequelize.col('due_date')),
            todayFormatted
          ),
          Sequelize.where(
            Sequelize.fn('DATE', Sequelize.col('due_date')),
            filterDateFormatted
          )
        ]
      }
    });

    if (dueMembership.length === 0) {
      return []
    }

    return dueMembership
  } catch (err) {
    console.log({ error: err.message});
    return [];
  }
};

module.exports = {
  getAllDueMembership
}
