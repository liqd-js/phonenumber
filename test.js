const PhoneNumber = require('./lib/phonenumber');

/**/
const tests = 
[
    [ '951002064', 'SK' ],
    [ '+421951002064' ],/*
    [ '+4210951002064' ],
    [ '+4210951002064', 'CZ' ],
    [ '4210951002064' ],
    [ '951002064' ],
    [ '951002064', 'SK' ],
    [ '000951002064', 'SK' ],
    [ '421901426214', 'CZ' ],
    [ '421901426214', 'CZ', [ 'SK', 'CZ' ]]*/
]
/**/

for( let [ number, country ] of tests )
{
    const parsed = PhoneNumber.parse( number, country );
    console.log( 'Parse', { number, country, parsed });
}
/** /
for( let [ number, country, countries ] of tests )
{
    const repaired = PhoneNumber.repair( number, countries || country )

    console.log( 'Repair', { number, country, countries, repaired });
}
/**/