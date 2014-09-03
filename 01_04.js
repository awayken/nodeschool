var fs = require('fs'),
    file = process.argv[ 2 ];

fs.readFile( file, function( error, fileData ) {
    'use strict';

    if ( !error ) {
        console.log( fileData.toString().split('\n').length - 1 );
    }
});
