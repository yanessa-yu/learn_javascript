
async function asyncFun1(){
   console.log('async start');
   await asyncFun2()
   await asyncFun3()
   await asyncFun4()
   console.log('async end')
}

async function  asyncFun2(){
    console.log('async await1');  
}

async function asyncFun3(){
    console.log('async await2')
}

async function asyncFun4(){
    console.log('async await3')
}

new Promise((reslove)=>{
    console.log('promise')
    reslove()
}).then(()=>{
    console.log('promise then1')
}).then(()=>{
    console.log('promise then2')
}).then(()=>{
    console.log('promise then3')
}).then(()=>{
    console.log('promise then4')
})

asyncFun1()



