var keystone = require('keystone');

exports = module.exports = function(req,res){
	var view = new keystone.View(req,res);
	var locals = res.locals;
	view.on('post',{ action: 'contact' },function(next){
		console.log("post");
		return res.redirect('/')
	});
	view.render('subscribe');
}