module.exports = function(app){

	app.get('/noticias', function(req, res){
		var mysql = require('mysql');

		var connection = mysql.createConnection({
			host : 'localhost',
			user : 'root',
			password : '1234',
			database : 'portal_noticias'
		});

		connection.connect((err) => {
		    if (err) {
		        console.log('Erro connecting to database...', err)
		        return
		    }
		    console.log('Connection established!')
		})

		connection.query('select * from noticias;', function(error, result){
			//res.send(result);
			res.render("noticias/noticias", {noticias : result});	
		});	

		connection.end((err) => {
		    if(err) {
		        console.log('Erro to finish connection...', err)
		        return 
		    }
		    console.log('The connection was finish...')
		})
	});
};