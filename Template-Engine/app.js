const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;
const hostname = '127.0.0.1';

app.use(express.static('public'));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => res.render('index'));

app.get('/blog', (req, res) => res.render('blog'));

app.get('/contact', (req, res) => res.render('contact'));

app.get('/about', (req, res) => res.render('about'));

app.listen(port, hostname, () => console.log(`Example app listening on port ${port}!`));
