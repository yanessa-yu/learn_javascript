(function(){
    //1、模块缓存对象
    var installedModules = {}
    var modules = {
        bar:  function(modules, installedModules){
            installedModules.bar = function(){
                return 1
            }
        },
        dar: function(modules, installedModules){
            installedModules.dar = function(){
                return 2
            }
        }
    }

    //2、webpack实现的require
    function __webpack_require__(moduleId){
       //3、判断是否已缓存模块
        if(installedModules[moduleId]){
            return installedModules[moduleId].exports;
        }
       
        var module = installedModules[moduleId] = {
            exports: {}
        }
         //4、缓存模块
        //5、调用模块函数
        //传入的第一个参数module是当前缓存的模块；
        //第二个参数exports是module.exports的引用，这也符合commonjs的规范；
        //第三个__webpack_require__ 则是require的实现。
         modules[moduleId](module, module.exports, __webpack_require__) 
         //6、返回module.exports
         return module.exports
    }

    //require第一个模块，
    var b = __webpack_require__('bar')
    console.log(b)
})();