const getAllDueMembership = require('./getDueMemberships').getAllDueMembership;
const sendEmailReminder = require('./mailer').sendEmailReminder;
const retry = require('./retry').exponentialBackoff

/* Get due Members from the database and notify them through their email
 * @params: void
 * @return: void 
 */
const processMemberships = async () => {
  try {
    // get due memberships details
    const memberships = await getAllDueMembership();

    // check if no due membership
    if (memberships.length === 0) {
      console.log("No due membership to notify today!");
      return;
    }
    
    // get today's date
    const today = new Date();

    for (const membership of memberships) {
      const { first_name, last_name, membership_type, due_date, total_amount, member_email_address, is_first_month, invoice_link } = membership;
      
      // check if the member is new user or (else if ) old user but notify the mailer-service in both cases
      if (is_first_month) {
        const emailData = {
          to: member_email_address,
          subject: `Fitness+ Membership Reminder - ${membership_type}`,
          text: `Hello ${first_name} ${last_name}, your ${membership_type} membership fee of #${total_amount} is going to due on ${due_date}. 
                 Please make the payment to continue enjoying our service.
                 Thank you. Best regards, Bello Abdulsamad`,
          html: `<p>Hello ${first_name} ${last_name},</p>
                <p>Your <strong>${membership_type}</strong> membership fee of <strong>#${total_amount}</strong> is going to due on <strong>${due_date}</strong>.
                Please make the payment to continue enjoying our services. Thank you.</p>
                <p><a href="${invoice_link}">View Invoice</a></p>
                <p>Best regards, <br> Bello Abdulsamad</p>`
        };
        await retry(sendEmailReminder, emailData);
      }
      else if (!isFirstMonth) { // I only trying to be strict here
        const emailData = {
        to: member_email_address,
        subject: `Fitness+ Add-On Service Reminder - ${membership_type}`,
        text: `Hello ${first_name} ${last_name}, your add-on service fee for ${membership_type} is #${total_amount} and is due on ${due_date}.
              Please make the payment to continue enjoying our services.
              Thank you. Best regards, Bello Abdulsamad`,
        html: `<p>Hello ${first_name} ${last_name},</p>
              <p>Your add-on service fee for <strong>${membership_type}</strong> is <strong>#${total_amount}</strong> and is due on ${due_date}.
              Please make the payment to continue enjoying our services. Thank you.</p>
              <p><a href="${invoice_link}">View Invoice</a></p>
              <p>Best regards, <br> Bello Abdulsamad</p>`
        };
        await retry(sendEmailReminder, emailData);
      }
      //console.log(`Just notify ${member_email_address}`);
    }
  } catch (err) { 
    console.log({ error: err.message })
  };
};

module.exports = {
  processMemberships
};
