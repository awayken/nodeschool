var http = require('http'),
    portNumber = process.argv[ 2 ];

var server = http.createServer(function( req, res ) {
    'use strict';

    if ( req.method === 'POST' ) {
        req.on('data', function( chunk ) {
            res.write( chunk.toString().toUpperCase() );
        });

        req.on('end', function() {
            res.end();
        });

    } else {
        res.end();
    }
});

server.listen( portNumber );
