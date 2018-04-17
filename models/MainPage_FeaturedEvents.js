var keystone = require('keystone');
var Types = keystone.Field.Types;

var MainPageFeaturedEvent = new keystone.List('Main Page Featured Event');

MainPageFeaturedEvent.add({
  eventTitle:{
    type:String
  },
  date:{
    type:Types.Date
  },
  eventDescription:{
    type:String
  },
  eventLink:{
    type:String
  },
  eventPhoto:{
    type:Types.CloudinaryImage
  }
});


MainPageFeaturedEvent.register();
