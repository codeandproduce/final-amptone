var keystone = require('keystone');
var Types = keystone.Field.Types;

var TeamMember = new keystone.List('TeamMembers',{
	map:{
		name:'name'
	},
	singular:'Event',
	plural: 'Events',
	autokey:{
		from:'name', path:'slug', unique:true
	}
});

TeamMember.add({
	name:{
		type:String, 
		required:true,
		initial:true
	},
	position:{
		type:String
	},
	description:{
		type:String
	}
})
TeamMember.register();