var keystone = require('keystone');
var Types = keystone.Field.Types;

var Events = new keystone.List('Events', {
  map:{
    name:'name'
  },
  singular: 'Event',
  plural: 'Events',
  autokey:{
    from:'name', path:'slug', unique: true
  }
});

Events.add({
  name:{
    type:String,
    required:true,
    initial:true
  },
  date:{
    type:Types.Date
  },
  description:{
    type:String
  },
  eventPhoto:{
    type:Types.CloudinaryImage
  }
});

Events.register();
