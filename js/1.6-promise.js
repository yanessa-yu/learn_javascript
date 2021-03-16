try {
    new Promise((resolve, reject)=>{
       try {
            throw new Error('123')
       } catch (error) {
           console.log(1, error)
       }
    }).then(res=>{
        console.log(res)
    }).catch(err=>{
        console.log(2,err)
    })
} catch (error) {
    console.log('3',error)
}