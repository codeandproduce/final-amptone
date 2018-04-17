var keystone = require('keystone');
var Types = keystone.Field.Types;

var MainPage = new keystone.List('Main Page');

MainPage.add({
  MainPageHeader:{
    type: String
  },
  MainPageHeader2:{
    type:String
  },
  MainPageSubHeading:{
    type:String
  },
  MainPageHeaderLink:{
    type:String
  },
  MainPageHeaderLinkLabel:{
    type:String
  }
});

MainPage.register();
