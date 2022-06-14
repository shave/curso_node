module.exports = function(app){

	app.get('/noticias', function(req, res){
		
		var connection = app.config.dbConnection();
		var noticiasModel = new app.app.models.NoticiaDao;

		noticiasModel.getNoticias(connection, function(error, result){
			res.render("noticias/noticias", {noticias : result});
		});	
	});
};