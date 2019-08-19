var Router = require("koa-router");

// Set router
router = new Router({
  prefix: '/users'
});

/**
 * @api {get} /user
 */
router.get("/", ctx => {
    ctx.body = "Hello route";
  })


/**
 * 
 * @param ctx
 */
router.post("hello", ctx=>{
      ctx.body = "Hello route";
  })

module.exports = router;