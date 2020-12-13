require('dotenv').config(); // read .env files
const express = require('express');

const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Set public folder as root
app.use(express.static('public'));

// Allow front-end access to node_modules folder
app.use('/scripts', express.static(`${__dirname}/node_modules/`));


// Listen for HTTP requests on port 3000
app.listen(port, () => {
  console.log('listening on %d', port);
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/gallery', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/pages/work.html'));
});

app.get('/academy', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/pages/training.html'));
});

app.get('/contact', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/pages/contact.html'));
});

app.get('/privacy-policy', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/pages/privacy.html'));
});


app.get('/academy/basic', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/pages/basic-course.html'));
});

app.get('/academy/complete', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/pages/complete.html'));
});

app.get('/academy/lighting', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/pages/lighting.html'));
});

app.get('/academy/makeup', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/pages/makeup.html'));
});

app.get('/academy/professional', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/pages/professional.html'));
});

app.get('/academy/retouching', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/pages/retouching.html'));
});

app.use(function (req, res, next) {
    res.status(404).sendFile(path.join(__dirname + '/public/pages/404.html'));
})

app.use(function (req, res, next) {
res.status(500).sendFile(path.join(__dirname + '/public/pages/500.html'));
})
