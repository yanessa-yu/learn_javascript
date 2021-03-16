let fs = require('fs')

let event = {
    _arr : [],
    on(fn){//发布和订阅之间，没有关系
        this._arr.push(fn)
    },
    emit(){ //执行该函数数组
        this._arr.forEach(fn=>fn())
    }
}

let school = {}

//将函数1放入数组_arr中
event.on(function(){
    console.log("读取一个")
})

//将函数2放入数组arr
event.on(function(){
    if(Object.keys(school).length == 2){
        console.log(school)
    }
})

fs.readFile('./js/18-/name.txt','utf8',function(err,data){
   school.name = data
   event.emit()
})

fs.readFile('./js/18-/age.txt','utf8',function(err,data){
    school.age = data
    event.emit()
})