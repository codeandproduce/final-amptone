var keystone = require('keystone');
var Types = keystone.Field.Types;

var Releases = new keystone.List("Releases", {
  map:{
    name:'nameOfTheSong'
  },
  singular:'Release',
  plural:'Releases',
  autokey:{
    from:'name',path:'slug',unique:true
  }
});

Releases.add({
  nameOfTheSong:{
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

Releases.register();
