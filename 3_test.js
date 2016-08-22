var http = require("http");
var arquivo = require('fs');


	var server = http.createServer(function(request,response){
		response.writeHead(200,{"Content-Type":"text/html"});

		arquivo.readFile('./arquivos/json_br.json',function(err,data){
		if (err) throw err;


		response.write(data.toString());

	});
});




//server.listen(3000);

//localhost:3000


server.listen(3000,function(){
console.log("Servidor Hello World rodando");
});

