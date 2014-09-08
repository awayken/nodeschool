var through = require('through'),
    split = require('split'),
    lineNumber = 1,
    changeCase = function( buffer ) {
        if ( lineNumber % 2 === 1 ) {
            this.queue( buffer.toString().toLowerCase() + '\n' );
        } else {
            this.queue( buffer.toString().toUpperCase() + '\n' );
        }
        lineNumber++;
    };

    process.stdin.pipe( split() ).pipe( through( changeCase ) ).pipe( process.stdout );
