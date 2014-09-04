var http = require('http'),
    fs = require('fs'),
    portNumber = process.argv[ 2 ],
    fileLocation = process.argv[ 3 ];

var server = http.createServer(function( req, res ) {
    'use strict';

    var readable = fs.createReadStream( fileLocation ),
        data = '';

    readable.on('data', function( chunk ) {
        data += chunk;
    });

    readable.on('end', function() {
        res.end( data );
    });
});

server.listen( portNumber );
