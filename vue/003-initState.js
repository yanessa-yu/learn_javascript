/**
 * 1、传入Vue实例vm
 * 2、vm._watchers = []
 * 
 * initData
 * 一个组件的data选项必须是一个函数，由此每个实例可以维护一份被返回对象的独立的拷贝。
 * https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function
 * 1、获取data对象
 * 2、将data所有的keys绑定到vm上
 * 3、判断
 * 3、使用Object.defineProperty方法，将所有keys增加get/set方法
 * 
 * 数组
 * 1、遍历数组，将数组的
 * **/

 var options = {
     data : function (){
         return {
             name: '余双贵',
             age: '30'
         }
     }
 }

function initData(options){
    var data = options.data
    data = getData(data) //执行datafunction
    console.log(data)
    var keys = Object.keys(data)
}

//1、获取data对象
function getData(data){
    return data.call(this);
}

function  proxy(){

}

initData(options)