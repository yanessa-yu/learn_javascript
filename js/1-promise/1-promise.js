/** promise是异步编程的一种解决方案
 *  解决了传统异步编程方案回调函数的回调地狱问题
*/


//promise对象用于表示一个异步操作的最终完成及其结果值
//promise对应有关键字new及其构建函数来创建
//该构建函数接收一个函数作为参数，可称之为“处理器函数”
//该处理器函数接受两个函数作为其参数，两个函数可定义为resolve和reject
//当异步任务顺利完成且返回结果值时，会调用resolve函数
//而当异步函数任务失败且返回失败原因时，会调用reject函数，失败原因通常是一个错误对象

/**
 * 一个promise有三种状态
 * <1> 待定(pending),初始状态，既没有被兑现，也没有被拒绝
 * <2>已兑现 (fulfilled),意味着操作成功完成
 * <3>已拒绝(rejected),意味着操作失败
 * 
 * 
 * //以下是promise原型上的三个方法
 * promise.prototype.then() 接收两个参数(onFulfilled和onRejected)，第二个参数可为空
 * promise.prototype.catch()
 * promise.prototype.finally()  无论成功失败都执行
 *   then的第二个参数和catch有什么区别？
 * 1、如果是Promise内部执行reject或者抛出异常<遵循纠结原则>，
 *      then的第二个参数和catch都定义的情况下， then的第二个参数捕获异常
 *      then的第二个参数没有定义，只定义了catch，则catch捕获异常
 * 2、如何是then内部抛出异常，则只有catch能捕获异常
 *     
 * 
 * 
 * 以下promise的四个方法可集合多个 promise 的返回结果
 * 接收的参数是一个Promise可迭代对象，可以是Array、Set、Map
 * promise.all()  所有都成功或者任意一个失败则返回
 * promise.race() 任意一个成功或者任意一个失败则返回
 * promise.allSettled() 所有都成功或者所有都失败则返回
 * promise.any() 任意一个成功或者所有都失败则返回
 * 
 * 
 * 
 * promise.resolve()
 * promise.reject()
 * 
 *
 *
 */



var promise =  new Promise((resolve, reject) => {
    reject(222)
});

promise.then(fulfilled =>{
    console.log('fulfilled',fulfilled)
    throw new Error('fulfilled 内部抛出异常')
}).catch(err=>{
    console.log('err',err)
}).finally(()=>{
    console.log('finish')
}
)

