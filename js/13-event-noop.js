var callbacks = [];
var pending = false;

function flushCallbacks(){
    pending = false;
    console.log(callbacks.length)
    var copies = callbacks.slice(0)
    callbacks.length = 0;
    for(var i=0; i<copies.length;i++){
        copies[i]()
    }
}

function nextTick(cb){
    callbacks.push(cb)
    if(!pending){
        pending = true;
        timerFunc()
    }
}

function timerFunc(){
    Promise.resolve().then(flushCallbacks)
}

for (let index = 0; index < 100; index++) {
    nextTick(function fun(){
        console.log(index)
    })
    
}
setTimeout(function(){
    console.log(222)
}, 0)