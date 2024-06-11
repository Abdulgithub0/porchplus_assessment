const express = require('express');
const router = express.Router();
const membershipController = require('../controllers/membershipController');

// I don't verify the post and put data.
//  Also, I do not authentication and authorization any of crud endpoints as I only focus on the core task as stated on assigment pdf.

/* 
 * Create a new membership
 * On success: status 201 and new created membership object
 * On Error: status 500 and the error message
 */
router.post('/', membershipController.createMembership);


/* Get all memberships
 * On success: status 200 and json containing array of all membership objects
 * On Error: 500 and the error message
 */
router.get('/', membershipController.getAllMemberships);


/* Get a membership by ID
 * On success: status 200 and json object of the identify membership
 * On Error: status 400 with message { error: 'Sorry, Membership not found'} or status 500 with its error message
 */
router.get('/:id', membershipController.getMembershipById);

/* Update a membership by ID
 * On success: status 200 and updated json object of the identify membership
 * On Error: status 400 with message { error: 'Sorry, Membership not found'} or status 500 with its error message
 */
router.put('/:id', membershipController.updateMembership);

/* Delete a membership by ID
 * On success: status 204 only
 * On Error: status 400 with message { error: 'Sorry, Membership not found'} or status 500 with its error message
 */
router.delete('/:id', membershipController.deleteMembership);


module.exports = router;

