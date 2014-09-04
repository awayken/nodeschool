var net = require('net'),
    portNumber = process.argv[ 2 ];

var server = net.createServer(function( socket ) {
    'use strict';

    var date = new Date(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        data = '';

    if ( month < 10 ) {
        month = '0' + month;
    }

    if ( day < 10 ) {
        day = '0' + day;
    }

    data = date.getFullYear() + '-' + month + '-' + day + ' ' + date.getHours() + ':' + date.getMinutes() + '\n';

    socket.end( data );
});

server.listen( portNumber );
