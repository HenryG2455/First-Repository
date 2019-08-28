const Koa = require('koa'),
    Router = require ('koa-router');

const app = new Koa();
    router = new Router();


let users = [
    {
        name: 'Henry',
    },
    {
        name: 'David',
    },
    {
        name: 'Kevin',
    },
];
    //local host 2000
    router.get('/user/:id', ctx => {
        ctx.body = users[ctx.params.id];
    });
    
    app
    .use(router.allowedMethods())
    .use(router.routes())
    .use(require('koa-body')());

app.listen(2000);

