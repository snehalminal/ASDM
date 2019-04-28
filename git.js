var http = require('http');

http.createServer(function(req,res){
res.writeHead(200, {'content_type':'text/html'});
res.end('Hello World!');
}).listen(2000);
console.log('server running on port 2000');