//js实现一个带并发限制的异步调度器scheduler，保证同时运行的任务最多有两个。
//https://www.nowcoder.com/discuss/599576?source_id=discuss_experience_nctrack&channel=-1
class Scheduler {
    constructor(){
        this.tasks = []
        this.currentTask = 0
        this.quaue = []
    }

    add(promiseCreator){
        //加入一个任务进来，判断当前任务总数
                return new Promise((resolve,reject) => {
                    if(this.currentTask >= 2){
                        //超过2个的放入队列等待
                        //同事需要传入当前Promise的resolve
                        this.quaue.push([resolve,promiseCreator])
                    }else{
                        this.currentTask = this.currentTask + 1
                        resolve(promiseCreator())
                    }
                }).then(()=>{
                    this.currentTask = this.currentTask - 1
                    //执行完一个，从队列里面读取第一个，执行
                    if(this.quaue.length > 0){
                        let item = this.quaue.shift()
                        this.currentTask = this.currentTask + 1
                        // this.run(task)
                        let task = item[1]
                        item[0](task())
                    }
                    return Promise.resolve()
                })
            }
    }

   

/**
 * 模拟一个ajax异步请求
 * **/
const timeout = (time) => new Promise(resolve => {
  setTimeout(resolve, time)
})

const scheduler = new Scheduler()
const addTask = (time, order) => {
    var p =  scheduler.add(() => timeout(time))
    p.then(() => console.log(order))
}

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')