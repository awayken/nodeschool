var http = require('http'),
    urls = process.argv.slice( 2 ),
    results = [];

urls.forEach(function( url ){
    'use strict';

    http.get( url, function( response ) {
        var totalData = '';

        response.on('data', function( data ) {
            totalData += data.toString();
        });

        response.on('end', function() {
            results.push( totalData );
            if ( results.length === urls.length ) {
                console.log( results.join('').length );
                console.log( results.join('') );
            }
        });
    });
});
