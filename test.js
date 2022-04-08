const PhoneNumber = require('./lib/phonenumber');

/**/
const tests = 
[
    [ '951002064' ],
    [ '951002064', 'SK' ],
    [ '000951002064', 'SK' ],
    [ '421901426214', 'CZ' ],
    [ '421901426214', 'CZ', [ 'SK', 'CZ' ]]
]
/**/

for( let [ number, country ] of tests )
{
    console.log( 'Parse', { number, country, parsed: PhoneNumber.parse( number, country )});
}

for( let [ number, country, countries ] of tests )
{
    console.log( 'Repair', { number, country, countries, repaired: PhoneNumber.repair( number, countries || country )});
}