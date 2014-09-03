var fs = require('fs'),
	fileData = fs.readFileSync( process.argv[ 2 ] );

console.log( fileData.toString().split('\n').length - 1 );
