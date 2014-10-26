var http = require("http");

http.createServer(function (request, respons) {
	respons.writeHead(200, {'COntent-Type': 'text/plain'});
	respons.end('Hello Worldｷﾀ━━━━(ﾟ∀ﾟ)━━━━!!\n');
}).listen(8124);

console.log("Server running at http://127.0.0.1:8124/");