//render函数

var render = (function  anonymous(){
    var a = 'input';
    var directives = [
        {
            name: 'model',
            rawName: 'v-model',
            value: (a),
            expression: "a"
        }
    ]
    var attrs = {
        "id":"app"
    }
    var on = {
        "input": function($event){
            if($event.target.composing){
                return;
            }
            a = $event.target.value
        }
    }
    this._c(a, directives, attrs, on)
})





var handlers = {
    has : function has(target, key){
        var has = key in target
        return has
    }
}
function initProxy(vm){
    new Proxy(vm, handlers)
}
var vm = {
    _c: function(a,b,c,d){
        console.log(a)
        }
}
var proxy = initProxy(vm) 
render.call(proxy)
//调用了wm._c 因为_c做了代理