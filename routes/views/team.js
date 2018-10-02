var keystone = require('keystone');

exports = module.exports = function(req,res){
	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.section = 'teamMembers';
	locals.data = {}
	var q = keystone.list('TeamMembers').model.find().sort('sortOrder');
	q.exec(function(err, result){
		locals.data.teamMembers = organize(result);
		view.render('team');
	});
};

function organize(arr){
	var newarr = arr;
	newarr.reverse();
	var arr1 = [];
	var arr2 = [];
	var arr3 = [];
	count = 0;
	for(var x = 0; x<newarr.length; x++){
		if(count%3==0){
			arr1.push(newarr[x]);
			count++;
		}else if(count%3==1){
			arr2.push(newarr[x]);
			count++;
		}else if(count%3 == 2){
			arr3.push(newarr[x]);
			count++;
		}
	}
	return {arr1, arr2, arr3};
}