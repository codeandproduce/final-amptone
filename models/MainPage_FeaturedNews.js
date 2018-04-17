var keystone = require('keystone');
var Types = keystone.Field.Types;

var MainPageFeaturedNews = new keystone.List('Main Page Featured News',{
  map:{
    name:'newsHeading'
  },
  autokey:{
    from:'newsHeading', path:'slug', unique:true
  }
});

MainPageFeaturedNews.add({
  newsHeading:{
    type:String,
    required: true,
    initial:true
  },
  description:{
    type:String
  },
  coverImage:{
    type: Types.CloudinaryImage
  }
});

MainPageFeaturedNews.register();
