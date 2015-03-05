var Hapi = require('hapi');

// create server with host and port

var server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

// add route


server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: 'public'
        }
    }
});


// start the server
server.start();

