var keystone = require('keystone');
var Types = keystone.Field.Types;

var Albums = new keystone.List("Albums", {
  map:{
    name:'nameOfTheAlbum'
  },
  singular:'Album',
  plural:'Albums',
  autokey:{
    from:'name', path:'slug', unique:true
  }
});

Albums.add({
  nameOfTheAlbum:{
    type:String,
    required:true,
    initial:true
  },
  artistName:{
    type:String
  },
  date:{
    type:Types.Date
  },
  soundcloudLink:{
    type:String
  },
  isThisFeatured:{
    type:Types.Boolean
  }
});

Albums.register();
