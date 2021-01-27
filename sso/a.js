const http=require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')

var root = path.resolve()

http.createServer(function(request, response){
   var pathname = url.parse(request.url).pathname
   var filepath = path.join(root, pathname)
   console.log(filepath)
   fs.stat(filepath, function(err,stats){
       console.log(err, stats)
       if(err){
           response.writeHead(404);
           response.end("404 Not Found");
       }else{
           response.writeHead(200);
           fs.createReadStream(filepath).pipe(response)
       }
   })
}).listen(7771)
console.log('服务器启动了')