var http = require('http');
//creating the srever
var server = http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('<h1>Hello Node!!!!</h1>\n');
});
//listening to the port
server.listen(3000,function(){
    console.log('Server is running at http://127.0.0.1:3000');
});