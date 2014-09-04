var mymodule = require('./01_06_module.js'),
    folder = process.argv[ 2 ],
    extension = process.argv[ 3 ];

mymodule( folder, extension, function( error, filterData ) {
    'use strict';

    if ( !error ) {
        filterData.forEach(function( file ){
            console.log( file );
        });
    }
});
