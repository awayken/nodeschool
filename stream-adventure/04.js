var through = require('through'),
    makeUpperCase = function( buffer ) {
        this.queue( buffer.toString().toUpperCase() );
    };

    process.stdin.pipe( through( makeUpperCase ) ).pipe( process.stdout );
