var module = require('./01_06_module.js'),
	folder = process.argv[ 2 ],
	extension = process.argv[ 3 ];

module( folder, extension, function( error, filterData ) {
	if ( !error ) {
		filterData.forEach(function( file ){
			console.log( file );
		});
	}
});
