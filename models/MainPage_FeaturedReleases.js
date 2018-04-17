var keystone = require('keystone');
var Types = keystone.Field.Types;

var MainPageFeaturedReleases = new keystone.List('Main Page Featured Releases',{
  map:{
    name:'songName'
  },
  autokey:{
    from:'songName', path:'slug', unique:true
  }
});

MainPageFeaturedReleases.add({
  songName:{
    type:String,
    required: true,
    initial:true
  },
  artistName:{
    type:String
  },
  songDescription:{
    type:String
  },
  coverImage:{
    type: Types.CloudinaryImage
  },
  songLink:{
    type:String
  }
});

MainPageFeaturedReleases.register();
