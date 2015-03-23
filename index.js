// Create Hapi server with host and port
var Hapi = require('hapi');
var pg = require('pg');
var conString = "postgres://postgresusr:postgresusrpassword@localhost:5432/mydb";

var server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

// Add route
server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: 'build'
        }
    }
});
server.route({
    method: 'GET',
    path: '/animals',
    config: {
        handler: getAnimals
    }
});

var client = new pg.Client(conString);

// Start the server
server.start();
console.log('hapi server started');


// DB Functions
function getAnimals(request, reply) {
    
    console.log('GET animals');
    
    // Connect to Postgres DB & query for animals
    pg.connect(conString, function(err, client, done) {
        var handleError = function(err) {
            if(!err) return false;
            done(client);
            reply('An error occurred.');
            return true;
        };

        client.query('SELECT name, location FROM animals', function(err, result) {
            if(handleError(err)) return;
            reply(result);
        });
    });
}
