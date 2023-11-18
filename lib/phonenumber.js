module.exports = class PhoneNumber
{
    static parse( number, country = undefined )
    {
        const parsed = (require('awesome-phonenumber')).parsePhoneNumber( number, { region: country });

        console.log( parsed );

        //const parsed = new (require('awesome-phonenumber'))( number, country );

        if( parsed.valid && parsed.number.e164.startsWith('+' + parsed.countryCode) && ( !country || country === parsed.regionCode ))
        {
            return (
            {
                number,
                valid           : true,
                mobile          : parsed.type === 'mobile',
                normalized      : parsed.number.e164,
                international   : parsed.number.international,
                national        : parsed.number.national,
                prefix          : '+' + parsed.countryCode,
                country         : parsed.regionCode
            });
        }

        return { number, valid: false };
    }

    static repair( number, countries = undefined ) // TODO poskusat dvojitu predvolbu
    {
        countries = countries ? ( Array.isArray( countries ) ? countries : [ countries ]) : [];

        for( let length of [ 0, 1, 2, -1, -2 ])
        {
            for( let country of [ undefined, ...countries ])
            {
                let parsed = PhoneNumber.parse( length >= 0 ? number.replace( new RegExp('^0{'+length+'}'), '' ) : number.padStart( number.length - length, '0' ), country );

                if( parsed.valid )
                {
                    return parsed;
                }
            }
        }

        return { number, valid: false };
    }
}