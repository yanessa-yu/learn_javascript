var qs = require('querystring')
var http = require('http');
var server = http.createServer();

server.on('request', function(req, res) {
    var params = qs.parse(req.url.split('?')[1]);
    var fn = params.callback;


    res.writeHead(200, {
         'Content-Type': 'text/javascript' ,
         'Access-Control-Allow-Credentials': 'true',     // 后端允许发送Cookie
         'Access-Control-Allow-Origin': 'http://www.a.com:7771',    // 允许访问的域（协议+域名+端口）
    /* 
     * 此处设置的cookie还是domain2的而非domain1，因为后端也不能跨域写cookie(nginx反向代理可以实现)，
     * 但只要domain2中写入一次cookie认证，后面的跨域接口都能从domain2中获取cookie，从而实现所有的接口都能跨域访问
     */
        'Set-Cookie': 'l=a123456;Path=/;Domain=www.a.com;HttpOnly'  // HttpOnly的作用是让js无法读取cookie});
    })
    if(fn){
        res.write(fn + '(' + JSON.stringify({'a':1}) + ')');
    }else{
        res.write(JSON.stringify({'a':1}));
    }
    

    res.end();
});

server.listen('7774');
console.log('Server is running at port 8080...');