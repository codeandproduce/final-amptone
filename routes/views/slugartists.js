var keystone = require('keystone');

exports = module.exports = function(req,res){

  var view = new keystone.View(req,res);
  var locals = res.locals;

  locals.section = 'artist';
  locals.filters = {
    artist: req.params.artist
  }
  locals.data = {
    artist:[],
    artistAlbums:[]
  }

  view.on('init', function(next){
    var q = keystone.list('Artists').model.findOne({
      slug: locals.filters.artist
    });
    q.exec(function(err, result){
      locals.data.artists = result;
      for(var br = 0; br<result.albumLink.length; br++){
        locals.data.artistAlbums.push({
          albumLink: result.albumLink[br],
          albumPhoto: result.albumPhotos[br].url
        });
      }


      next(err);
    });
  });

  view.render('specificArtists');

}
