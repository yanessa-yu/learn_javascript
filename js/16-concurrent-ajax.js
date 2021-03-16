
/**tasks 一个数组，
数组元素是一个个函数，该函数是基于Promise进行管理的


请求100个
工作区，每个工作区同时只处理一个任务
工作区任务执行完成后，获取下一个任务执行

限制数为2，则开启2个工作区

**/
function createRequest(tasks, limit){
    limit = limit | 5;
    let results = []
    //together存储工作区
    let together = new Array(pool).fill(null)
    let index = 0 
    together = together.map(()=>{
        return new Promise((resolve, reject) => {
            const run = function run(){
                if(index >= tasks.length){
                    resolve();
                    return
                }
                let old_index = index
                let task = task[index]
                index = index + 1
                task().then(result=>{
                    results[old_index] = result
                    run();
                }).catch(reason => {
                    reject(reason)
                });
            }
            run();
        })
    } )
    return Promise.all(together).then(()=> results)


}

let  tasks = [];
createRequest(tasks, 2).then(results => {
    //按顺序存储结果
    //都成功，整体才成功
    console.log(results)    
}).catch(reason=>{
    //一个失败，整体都失败
    console.log(reason)
})