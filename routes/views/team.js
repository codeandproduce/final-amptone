var keystone = require('keystone');

exports = module.exports = function(req,res){
	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.section = 'teamMembers';
	view.query('teamMembers', keystone.list('TeamMembers').model.find().sort('sortOrder'));
	view.render('team');
}