const Koa = require("koa");
var Router = require("koa-router");

const app = new Koa();
const PORT = process.env.PORT || 3333;

const user = require('./src/routes/user/')

// Set router
var router = new Router();

// Set routes
router.get("/hello", ctx => {
  ctx.body = "Hello route";
})
.post("hello", ctx=>{
    ctx.body = "Hello route";
})

app.use(router.routes()).use(router.allowedMethods());
app.use(user.routes()).use(router.allowedMethods());

/**
 * Each middleware receives a Koa context object tht encapsulates an incoming http message and the coressponding response tothat message.
 * ctx is often used as the paramer name for the context object
 */

app.use(async (ctx, next) => {
  console.log(ctx.params);
  console.log("Middleware 1");
  ctx.body = "Hello Koa Server ctx 1";
  await next();
});

app.use(async (ctx, next) => {
  ctx.body = "Hello Koa Server - ctx 2";
  console.log("Middleware 2");
});

app.on('error', (err, ctx)=>{
    console.log("Hubo un error")
    console.log(err.message)
    ctx.body = "A error"
})

app.listen(PORT, () => {
  console.log(`-Server started on port ${PORT}`);
});
