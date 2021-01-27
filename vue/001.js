var timerFunc;

if(typeof Promise !== 'undefined'){
    var p = Promise.resolve();
    timerFunc = function(){
        p.then(flushCallbacks);
    }
}else if(MutationObserver !== 'undefined'){
    var counter = 1
    var observer = new MutationObserver(flushCallbacks)
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode,{
        characterData: true
    })
    timerFunc = function(){
        counter = (counter + 1) % 2;
        textNode.data = String(counter)
    }
}else if(typeof setImmediate !== 'undefined'){
    timerFunc = function(){
        setImmediate(flushCallbacks)
    }
}else{
    timerFunc = function(){
        setTimeout(flushCallbacks, 0)
    }
}


var pending = false
var callbacks = [];
function flushCallbacks(){
    pending = false;
    var copies = callbacks.slice(0)
    callbacks.length = 0;
    for(var i=0;i<copies.length;i++){
        copies[i]();
    }
}



var queue = []
function flushSchedulerQueue(){
    var watcher
    for(index=0;index<queue.length;index++){
        watcher = queue(index);
        watcher.run()
    }
}

function queueWatcher(watcher){
    queue.push(watcher)//一个watcher队列，有一次更新添加到该队列中
    //等到宏任务的时候一次性执行watcher队列里面的所有更新
    nextTick(flushSchedulerQueue);
}

function nextTick(cb, ctx){
    var _resolve;
    //callbacks存储的是
    callbacks.push(function(){
        if(cb){
            cb.call(ctx)
        }else if(_resolve){
            _resolve(ctx)
        }
    })
    if(!pending){
        pending = true;
        timerFunc(); 
    }
}