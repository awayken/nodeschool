var http = require('http'),
    urls = process.argv.slice( 2 ),
    results = [],
    successes = [],
    url = '';

for ( var i = 0; i < urls.length; i++ ) {
    url = urls[ i ];
    successes[ i ] = '0';

    (function( url, i ) {
        'use strict';

        var thisI = i;

        http.get( url, function( response ) {
            var totalData = '';

            response.on('data', function( data ) {
                totalData += data.toString();
            });

            response.on('end', function() {
                results[ thisI ] = totalData;
                successes[ thisI ] = '1';

                if ( successes.indexOf('0') === -1 ) {
                    results.forEach(function( result ) {
                        console.log( result );
                    });
                }
            });
        });
    }( url, i ));
}
