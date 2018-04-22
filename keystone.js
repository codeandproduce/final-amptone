// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Require keystone
var keystone = require('keystone');
var handlebars = require('express-handlebars');
var socketIO = require('socket.io');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');


// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({
	'name': 'Amptone',
	'brand': 'Amptone',

	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': '.hbs',

	'custom engine': handlebars.create({
		layoutsDir: 'templates/views/layouts',
		partialsDir: 'templates/views/partials',
		defaultLayout: 'default',
		helpers: new require('./templates/views/helpers')(),
		extname: '.hbs',
	}).engine,

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'Management',
	'cloudinary config':process.env.CLOUDINARY_URL,
	'cookie secret':process.env.COOKIE_SECRET
});

// Load your project's Models
keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});

// Load your project's Routes
keystone.set('routes', require('./routes'));


// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
	managements: 'managements',
	artists:'artists'
});


// Start Keystone to connect to your database and initialise the web server


keystone.start({
    onHttpServerCreated: function() {
        io = socketIO.listen(keystone.httpServer);

        io.on('connection', (socket) => {
        	console.log('connected');
        	socket.on("contact-form-submit", (doc) => {
       //  		doc = {name,
    			// email,
    			// subject,
    			// message}
    			io.emit("contact-form-processing");

    			var transporter = nodemailer.createTransport(smtpTransport({
				  service: 'gmail',
				  host: 'smtp.gmail.com',
				  auth: {
				    user: process.env.OFFICIAL_AMPTONE_EMAIL,
				    pass: process.env.OFFICIAL_AMPTONE_PASSWORD
				  }
				}));

    			var mailOptions = {
				    from: doc.email,
				    to:'theofficialamptonerecords@gmail.com',
				    subject: doc.subject,
				    text: "=======================\n\nEmail from: "+doc.email+"\n"+"Name: "+doc.name+"\n\n=======================\n\n\n"+doc.message
			  	};

			  	transporter.sendMail(mailOptions, (error, info) => {
			    if (error) {
			    	io.emit("contact-form-failure", {
			    		err: error
			    	});
			        return console.log('Error while sending mail: ' + error);
			    } else {
			    	io.emit("contact-form-success");
			        console.log('Message sent: %s', info.messageId);
			    }
			    transporter.close();
        		});
        	});
    	});
	}
});
