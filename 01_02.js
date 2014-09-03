var arguments = process.argv.slice( 2 ),
	sum = 0;

while ( arguments.length ) {
	sum += Number( arguments.pop() );
}

console.log( sum );
