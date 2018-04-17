var keystone = require('keystone');

exports = module.exports = function(req,res){

  var view = new keystone.View(req, res);
  var locals = res.locals;

  locals.section = 'events';
  view.query('events', keystone.list('Events').model.find().sort('sortOrder'));
  view.query('featuredEvent', keystone.list('Main Page Featured Event').model.find().sort('sortOrder'));

  view.render('events');

}
