export function parseTimeUnit(unit)
{
    if (!unit)
    {
        return "00";
    }

    if (unit < 10)
    {
        return "0" + unit;
    } 

    return unit;
}

export function getTimeLeft()
{
    const now = new Date();
    let daysLeft = 0;
    now.setHours(0,0,0);
    let today = now.getDay();

    while (today != 2)
    {
        daysLeft++;
        today++;

        if (today > 6)
        {
            today = 0;
        }
    }

    let doomsDate = new Date();

    doomsDate.setDate(now.getDate() + daysLeft);
    doomsDate.setHours(0,0,0,0);
    
    const endTime = new Date(doomsDate) / 1000;

    var elapsed = new Date() / 1000;

    var totalSec =  endTime - elapsed;


    var h = parseInt( totalSec / 3600 );
    var d = parseInt( h / 24);
    h -= d * 24;
    var m = parseInt( totalSec / 60 ) % 60;
    var s = parseInt( totalSec % 60, 10 );

    return {days: d, hours: h, minutes: m, seconds: s};
}