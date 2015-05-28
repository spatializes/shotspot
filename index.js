// Create Hapi server with host and port.
var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

// Routes.
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

// Start the server
server.start();
console.log('Hapi server started.');

// Connect to DB, setup if needed
var fs = require('fs');
var file = 'shot.db';
var exists = fs.existsSync(file);

if(!exists) {
  console.log("Creating DB file.");
  fs.openSync(file, "w");
}

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(file);

// SEED
db.serialize(function() {
  if(!exists){
    db.run("CREATE TABLE Animals (name TEXT, location TEXT)");
    var stmt = db.prepare("INSERT INTO Animals (name, location) VALUES (?, ?)");
    stmt.run("Zebra", "Africa");
    stmt.run("Moose", "Canada");
    stmt.run("Turtle", "Ocean");
    stmt.run("Cow", "America");

    stmt.finalize();

    db.each("SELECT rowid AS id, name, location FROM Animals", function(err, row) {
      console.log(row.id + ": " + row.name + " : " + row.location);
    });
  }
});

// DB Functions
function getAnimals(request, reply) {
    
    console.log('GET animals.');
    var query = "SELECT rowid AS id, name, location FROM Animals";
    db.all(query, function(err, rows) {
      reply(rows);
    });
}
