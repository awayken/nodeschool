var args = process.argv.slice( 2 ),
    sum = 0;

while ( args.length ) {
    sum += Number( args.pop() );
}

console.log( sum );
