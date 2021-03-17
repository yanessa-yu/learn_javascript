//防抖
//如果短时间内大量触发同一时间，只会执行一次函数

//如：监听浏览器的滚动事件，返回当前滚动条与顶部的距离

//实现的关键在于setTimeout函数，由于还需要一个变量来保存计时
//考虑维护全局纯净，可以借助闭包来实现


//防抖
function debounce2(fn,delay){
    var timer = null
    if(timer){
        clearTimeout(timer)
        timer = setTimeout(fn, delay);
    }else{
        timer = setTimeout(fn, delay);
    }
}

function run(){
    console.log(111)
}

setInterval(run, 1000);







function debounce(fn, delay){
    var timer = null
    return function(){
        if(timer){
            clearTimeout(timer)
            timer = setTimeout(fn, delay)
        }else{
            timer = setTimeout(fn, delay)
        }
    }
}

//简化版
function debounce(fn, delay){
    var timer = null
    return function(){
        if(timer){
            clearTimeout(timer)
            timer = setTimeout(fn, delay)
        }
    }
}