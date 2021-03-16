const http = require('http')
const url = require('url')
const path = require('path')
const fs = require('fs')

http.createServer(function(request, response){
    var root = path.resolve()
    var pathname = url.parse(request.url).pathname
    var filepath = path.join(root, pathname)
    console.log(filepath)
    fs.stat(filepath, function(err, stats){
        if(err){
            response.writeHead(404)
            response.end('404 Not Found')
        }else{
            response.writeHead(200)
            fs.createReadStream(filepath).pipe(response)
        }
    })

}).listen(8771)

console.log("server listen in 8771");
