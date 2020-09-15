const express = require("express");
const session = require("express-session");
const router = express.Router();


// POST CRUD API
const POST_ENDPOINT = '/api/v1/posts';

router.use((request, response, next) => {
    console.log(`Router Time: ${Date.now()}`)
    next();
});

router.post(POST_ENDPOINT, (request, response) => {
    const post = request.body;
    response.send('POST');
});

router.get('/', (request, response) => {
    const mysession = request.session;

    if(mysession.email){
        return response.redirect('/admin');
    }
    
    response.render('index');
});

router.get('/admin', (request, response) => {
    const session = request.session;

    if(session.email){
        response.write(`<h1>Hola ${session.email}</h1>`);
        response.end('<a href="logout">Logout</a>');
    }else{
        return response.redirect('/login');
    }
    response.send('Estoy en el admin');
});

router.get('/login', (request, response) => {
    const session = request.session;
    if(session.email){
        return response.redirect('/admin');
    }
   response.render('login');
});

router.post('/login', (request, response) => {
    const session = request.session;
    session.email = request.body.email;
    response.end('Correcto');
});

router.get('/logout', (request, response) => {
    request.session.destroy((err) => {
        if(err){
            console.log(err);
        }
        response.redirect('/');
    })
});

router.put(`${POST_ENDPOINT}/:id`, (request, response) => {
    response.send('PUT');
});

router.delete(`${POST_ENDPOINT}/:id`, (request, response) => {
    response.send(`DELETE ${request.params.id}`);
});

module.exports = router;