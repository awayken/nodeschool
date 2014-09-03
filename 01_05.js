var fs = require('fs'),
    path = require('path'),
    folder = process.argv[ 2 ],
    extension = process.argv[ 3 ];

fs.readdir( folder, function( error, dirData ) {
    'use strict';

    var file;

    if ( !error ) {
        for ( var i = 0; i < dirData.length; i++ ) {
            file = dirData[ i ];

            if ( '.' + extension === path.extname( file ) ) {
                console.log( file );
            }
        }
    }
});
