const Membership = require('../models').Membership;
const { Op, Sequelize } = require('sequelize');

/**
 * Handle Creation of new gym membership
 */
exports.createMembership = async (req, res) => {
  try {
    const membership = await Membership.create(req.body);
    invoice = { invoice_link: `http://localhost:9000/${membership.membership_id}` };
    const newMember = await Membership.update(invoice, { where: {membership_id: membership.membership_id }});
    console.log("new member has been created");
    res.status(201).json(membership);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


/*
 *  Handle retrieval of all members and their membership details
 */
exports.getAllMemberships = async (req, res) => {
  try {
    const memberships = await Membership.findAll();
    res.status(200).json(memberships);
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
};


/*
 * Handle single membership retrieval
 */
exports.getMembershipById = async (req, res) => {
  try {
    const membership = await Membership.findByPk(req.params.id);
    if (!membership) {
      return res.status(404).json({ error: 'Sorry, Membership not found' });
    }
    res.status(200).json(membership);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


/**
 * Handle membership update
 */
exports.updateMembership = async (req, res) => {
  try {
    const [updated] = await Membership.update(req.body, { where: {membership_id: req.params.id }});
    if (!updated) {
      return res.status(404).json({ error: 'Sorry, Membership not found' });
    }
    const updatedMembership = await Membership.findByPk(req.params.id);
    res.status(200).json(updatedMembership);
  } catch (err) {
    res.status(500).json({ error: err.message });
  } 
};


// delete membership
exports.deleteMembership = async (req, res) => {
  try {
    const deleted = await Membership.destroy({ where: { membership_id: req.params.id } });
    if (!deleted){
      return res.status(404).json({ error: 'Sorry, Membership not found'}); 
    }
    res.status(204).json({ Mesage: 'Your Membership has been successfully deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

