var ws = require("nodejs-websocket");
console.log("开始建立连接...")

var index = null ,  indexReady = false;
var server = ws.createServer(function(conn){
    conn.on("text", function (str) {
        console.log("收到的信息为:"+str)
        if(str==="index"){
            index = conn;
        }
		sendMess();
		function sendMess(){
			if(index&&index.readyState===1){
				index.sendText(new Date + "");
				setTimeout(sendMess,1000);
			}
		}

    })
    conn.on("close", function (code, reason) {
        console.log("关闭连接")
    });
    conn.on("error", function (code, reason) {
        console.log("异常关闭")
    });
}).listen(8000)
console.log("WebSocket建立完毕")