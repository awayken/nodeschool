var http = require('http'),
    url = process.argv[ 2 ];

http.get( url, function( response ) {
    'use strict';

    response.on('data', function( data ) {
        console.log( data.toString() );
    });
});
