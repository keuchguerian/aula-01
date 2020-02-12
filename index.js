var express = require('express');

var server = express();

// http://localhost:3333/

server.get ('/', (resquest, response) => {
    response.send('Hello World!!');
} )
server.listen(3333);
