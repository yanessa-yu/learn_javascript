const Router = require('koa-router');
const router = new Router({
    prefix: ''
})

const site = require('../controllers/site')

router.get('/', async function(ctx, next){
    ctx.set('X-XSS-Protection',0)
    ctx.set('Set-Cookie','a=1235')
})

router.get('/getName/:id', site.getName)
router.get('/getAge',  site.getAge)
router.get('/noCors',site.noCors)
router.get('/cors',site.cors)
router.put('/putCors', site.cors)
router.head('/headCors', site.cors)


module.exports = router