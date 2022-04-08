const PhoneNumber = require('./lib/phonenumber');

const tests = 
[
    [ '951002064' ],
    [ '951002064', 'SK' ],
    [ '000951002064', 'SK' ]
]

for( let [ number, country ] of tests )
{
    console.log( 'Parse', { number, country, parsed: PhoneNumber.parse( number, country )});
}

for( let [ number, country ] of tests )
{
    console.log( 'Repair', { number, country, repaired: PhoneNumber.repair( number, country )});
}