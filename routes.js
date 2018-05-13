module.exports = function(app){
	app.get('/pe_ratio', function(req,res){
		console.log('got the get');
		res.end();
	});
};
