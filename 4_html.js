var http = require('http'),
	arquivo = require('fs');

var server = http.createServer(function(request,response){
	response.writeHead(200,{"Content-type":"Text/html"});
	
	if(request.url =='/'){
		arquivo.readFile(__dirname+'/arquivos/index.html',function(err,html){
			if(err) response.write('Arquivo index.html não encontrado');
			response.write(html);
			response.end();
		});
	}else if(request.url == '/contatos'){
		arquivo.readFile('./arquivos/contatos.html',function(err,html){
			if(err) response.write('Arquivo contatos.html não encontrado');
			response.write(html);
			response.end();
			
		});	
	} else {
		response.write('Página não encontrada');
		response.end();
	}


});

server.listen(3000,function(){
	console.log('Servidor Rodando');
	console.log(__dirname);
});