var http = require("http");

var server = http.createServer(function(request,response){
response.writeHead(200,{"Content-Type":"text/html"});

response.write("<hl> Hello World </h1>");
response.write("<br>");
response.write("<h3> Primeira aula </h3>");
response.end();
});

//server.listen(3000);

//localhost:3000


server.listen(3000,function(){
console.log("Servidor Hello World rodando");
});
