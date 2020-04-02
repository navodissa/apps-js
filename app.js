const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/hello') {
        res.write('Hello World');
        res.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000');