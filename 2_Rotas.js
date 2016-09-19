var http = require("http");
var url = require("url");

var server = http.createServer(function(request,response){
	response.writeHead(200,{"Content-Type":"text/html"});

	if(request.url == '/'){
		response.write("<hl> Página Principal</h1>");
	}
	else if (request.url=='/contato'){
		response.write("<hl> Página de Contato</h1>");
	}
	else if (request.url=='/clientes'){
		response.write("<hl> Página de Clientes</h1>");
	}
	else{
		response.write("<hl> Página não encontrada</h1>");
	}

	var resultado = url.parse(request.headers.host+request.url);
	response.write('<br>');
	response.write(resultado.href);

	response.end();
});

//server.listen(3000);

//localhost:3000


server.listen(3000,function(){
console.log("Servidor está rodando rodando");
});
