var http = require('http'),
    url = require('url'),
    portNumber = process.argv[ 2 ];

var server = http.createServer(function( req, res ) {
    'use strict';

    var endpoint = url.parse( req.url, true ),
        payload = {};

    if ( endpoint.pathname === '/api/parsetime' && req.method === 'GET' ) {
        var date = new Date( endpoint.query.iso );

        payload = {
            'hour': date.getHours(),
            'minute': date.getMinutes(),
            'second': date.getSeconds()
        };

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end( JSON.stringify( payload ) );

    } else if ( endpoint.pathname === '/api/unixtime' && req.method === 'GET' ) {
        var date = new Date( endpoint.query.iso );

        payload = {
            'unixtime': date.getTime()
        };

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end( JSON.stringify( payload ) );

    } else {
        res.end();
    }
});

server.listen( portNumber );
