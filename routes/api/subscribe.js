var request = require('superagent');


module.exports = function (req, res) {
	var mailchimpInstance   = process.env.MAILCHIMP_INSTANCE; // 'us6',
    listUniqueId        = process.env.MAILCHIMP_LIST_UNIQUE_ID; // 'b6a82d89f0',
    mailchimpApiKey     = process.env.MAILCHIMP_API_KEY; // '637274b5ab272affbf7df7d3723ea2a1-us6';
	if (!req.body.email) {
    	return res.sendError('incomplete data set');
  	}
  	var firstName = req.body.firstname;
  	var lastName = req.body.lastname;
  	var email = req.body.email;

  	 request
        .post('https://' + mailchimpInstance + '.api.mailchimp.com/3.0/lists/' + listUniqueId + '/members/')
        .set('Content-Type', 'application/json;charset=utf-8')
        .set('Authorization', 'Basic ' + new Buffer('any:' + mailchimpApiKey ).toString('base64'))
        .send({
          'email_address': email,
          'status': 'subscribed',
          'merge_fields': {
            'FNAME': firstName,
            'LNAME': lastName
          }
        })
            .end(function(err, response) {
              if (response.status < 300 || (response.status === 400 && response.body.title === "Member Exists")) {
                res.render("subscribed-success");
              } else {
                res.redirect({
                	err
                },"/subscribe");
              }
          });
};
