var http = require('http'),
    urls = process.argv.slice( 2 ),
    results = [];

urls.forEach(function( url ){
    http.get( url, function( response ) {
        var totalData = '';

        response.on('data', function( data ) {
            totalData += data.toString();
        });

        response.on('end', function() {
            results.push( totalData );
            if ( checkResults() ) {
                printResults();
            }
        });
    });
});

function checkResults() {
    return results.length === urls.length;
}

function printResults() {
    console.log( results.join('').length );
    console.log( results.join('') );
}
