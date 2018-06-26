var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);

	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'mainpage';
	locals.data = {
    artist:[]
  }
	// view.query('mainPage', keystone.list('Main Page').model.find().sort('sortOrder'));
	// view.query('mainPageFeaturedReleases', keystone.list('Main Page Featured Releases').model.find().sort('sortOrder'));
	// view.query('mainPageFeaturedEvent', keystone.list('Main Page Featured Event').model.find().sort('sortOrder'));
	view.on('init', function(next){
		var q = keystone.list('Main Page').model.find().sort('sortOrder');
		q.exec(function(err, result){
			console.log('q1')

			locals.data.mainPage = result[0];

			var q2 = keystone.list('Main Page Featured Releases').model.find().sort('sortOrder');
			q2.exec(function(err, result){
				console.log('q2')
				locals.data.mainPageFeaturedReleases = result;
				locals.data.mainPageFeaturedReleases.reverse();



				var q3 = keystone.list('Main Page Featured Event').model.find().sort('sortOrder');
				q3.exec(function(err, result){
					console.log('q3')

					locals.data.mainPageFeaturedEvent = result;
					locals.data.mainPageFeaturedEvent.reverse();



					var q4 = keystone.list('Main Page Featured News').model.find().sort('sortOrder');
					q4.exec(function(err, result){
						console.log('q4')
						locals.data.mainPageFeaturedNews = organize(result);
						locals.data.mainPageFeaturedNews.arr1.reverse();
						next(err)
					});
				});
			});
		});
	});
	view.render('index');

			
	// Render the view
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
