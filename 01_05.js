var fs = require('fs'),
	path = require('path'),
	folder = process.argv[ 2 ],
	extension = process.argv[ 3 ];

fs.readdir( folder, function( error, dirData ) {
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

/*
      var fs = require('fs')
      var path = require('path')

      fs.readdir(process.argv[2], function (err, list) {
        list.forEach(function (file) {
          if (path.extname(file) === '.' + process.argv[3])
            console.log(file)
        })
      })
*/
