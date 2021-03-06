var keystone = require('keystone');

exports = module.exports = function(req, res){
  var view = new keystone.View(req,res);
  var locals = res.locals;

  locals.section = 'artists';
  view.query('artists', keystone.list('Artists').model.find().sort('sortOrder'));


  view.render('artists');
}
