// Require HTTP and declare port
const http = require('http');
const fs = require('fs')
const port = process.env.PORT || 4000;
const express = require('express');

const app = express();
app.use(express.static(('public')));

function serveStaticFile(res,path, contentType, responseCode = 200) {
    fs.readFile(__dirname + path, (err,data) => {
        if(err) {
            res.writeHead(500, {'Content-Type' : 'text/plain' })
            return res.end('500 - Internal Error')
        }
        res.writeHead(responseCode, {'Content-Type' : contentType })
        
        res.end(data)
    })
}

const server = http.createServer((req,res) => {
    // normalize url by removing query string and making it lowercase.
    const path = req.url.replace(/\/?(?:\?.*)?$/,'').toLowerCase()
    switch(path){
        case '':
            res.render('index.html')
            break;
        case '/about':
            serveStaticFile(res,'/assets/pages/about.html' ,'text/html')
            break;
        case '/contact':
            serveStaticFile(res,'/assets/pages/contact.html' ,'text/html')
            break;
        case '/work':
            serveStaticFile(res,'/assets/pages/work.html' ,'text/html')
            break;
        case '/training':
            serveStaticFile(res,'/assets/pages/training.html' ,'text/html')
            break;
        default:
            serveStaticFile(res, '/public/404.html' ,'text/html', 404)
            break;
    }
});


server.listen(port, () => console.log(`server started on port ${port};\n`
+ 'press Ctrl+C to terminate....'))
