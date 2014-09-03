module.exports = function( folder, extension, callback ) {
	var fs = require('fs'),
		path = require('path');

	fs.readdir( folder, function( error, dirData ) {
		var files = [];

		if ( error ) {
			return callback( error );
		}
		
		dirData.forEach(function( file ){
			if ( '.' + extension === path.extname( file ) ) {
				files.push( file );
			}
		});
		
		callback( null, files );
	});
};
