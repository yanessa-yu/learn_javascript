exports.getName = async  function(ctx, next){
    ctx.set('X-XSS-Protection',0)
    ctx.body = ctx.params.id
}

exports.getAge = async function(ctx, next){
    ctx.set('X-XSS-Protection',0)
    ctx.set('Access-Control-Allow-Origin','http://10.200.137.53:8771')
    ctx.set('Access-Control-Allow-Credentials','true')//可以携带cookie
    ctx.body = '18'
}

exports.noCors = async function(ctx){
    ctx.body = '123'
}

exports.cors = async function(ctx){
    ctx.set('Access-Control-Allow-Origin','http://10.200.137.53:8771')
    ctx.body = '111'
}