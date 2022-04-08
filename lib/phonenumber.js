module.exports = class PhoneNumber
{
    static parse( number, country = undefined )
    {
        const parsed = new (require('awesome-phonenumber'))( number, country );

        if( parsed.isValid() && parsed.getNumber('e164').startsWith('+' + parsed.getCountryCode()) )
        {
            return (
            {
                number,
                valid           : true,
                mobile          : parsed.isMobile(),
                normalized      : parsed.getNumber('e164'),
                international   : parsed.getNumber('international'),
                national        : parsed.getNumber('national'),
                prefix          : '+' + parsed.getCountryCode(),
                country         : parsed.getRegionCode()
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