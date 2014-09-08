var concat = require('concat-stream'),
    flipIt = function( buffer ) {
        console.log( buffer.toString().split('').reverse().join('') );
    };

process.stdin.pipe( concat( flipIt ) );
