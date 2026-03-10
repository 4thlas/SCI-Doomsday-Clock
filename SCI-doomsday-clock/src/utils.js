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

export function getTimeLeft(currDate)
{
        const doomDate = new Date();

        let daysLeft = 0;
        let today = currDate.getUTCDay();

        while (today != 6)
        {
            daysLeft++;
            today++;

            if (today > 6)
            {
                today = 0;
            }
        }

        let msLeft = Math.abs(doomDate.getDate() - currDate.getDate())
        

        return doomDate.setDate(doomDate.getDate() + daysLeft)
}