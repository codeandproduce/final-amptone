var keystone = require('keystone');

exports = module.exports = function(req, res){

  var view = new keystone.View(req,res);
  var locals = res.locals;

  locals.section = 'releases';
  locals.data = {
    releases:[]
  };

  view.on('init', function(next){
    var q = keystone.list('Releases').model.find().sort('sortOrder');
    q.exec(function(err, result){
      locals.data.releases = result;
    });
    var q2 = keystone.list('Albums').model.find().sort('sortOrder');
    q2.exec(function(err, result){
      locals.data.albums = result;
      next();
    });
  });

view.render('releases');
};
