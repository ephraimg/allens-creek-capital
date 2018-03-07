
require('dotenv').config();
var path = require('path');
var nodeMailer = require('nodemailer');
var root = path.join(__dirname, '/../../');

var mailer = nodeMailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.MAILER_ADDRESS,
		pass: process.env.MAILER_PASSWORD
	}
});

module.exports = function(app) {

	app.get('*', function(req, res) {
		res.sendFile(path.join(root, 'index.html'));
	});

	app.post('/form', function(req, res) {
		var mailerConfig = {
			from: req.body.email, // this gets overridden by gmail anyway...
			to: process.env.OWNER_ADDRESS,
			replyTo: req.body.email,
			subject: 'Message from ' + req.body.name + ' re: ACC',
			text: 	'The message below was sent via the ACC contact form. ' +
					'Click Reply to respond directly to the sender.\n\n' +
				  	'----------------------------------------------------\n\n' +
					'Sender name: ' + req.body.name + '\n' +
					'Sender email: ' + req.body.email + '\n\n' +
					req.body.message.split('&#10;').join('\n')
		};
		mailer.sendMail(mailerConfig, function(err, data) {
			if (err) { return console.log(err); }
		});
		res.sendStatus(201);
	});

};

