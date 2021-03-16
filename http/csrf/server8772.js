const Koa = require('koa')
const app = new Koa();

const bodyParser = require('koa-bodyparser')
app.use(bodyParser())

app.use(require('./routers/site').routes())

app.listen(8772,function(){
    console.log('App is listening on port 8772');
})