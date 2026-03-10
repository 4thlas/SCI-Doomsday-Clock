import { useState } from "react"
import "./Clock.css"
import "@/index.css"
import { parseTimeUnit } from "@/utils"
import { getTimeLeft } from "../../utils"

function Clock()
{
    const [timeLeft, setTimeLeft] = useState(null) 

    const updateTime = () =>
    {
        const currDate = new Date();
        const timeLeft = getTimeLeft(currDate)

        console.log();

        setTimeLeft(currDate.getUTCDay());

        return currDate;
    }

    setInterval(updateTime, 1000)

    return <div className="clock">
        {timeLeft && <>
            <h1>
                {parseTimeUnit(timeLeft.getHours())}
            </h1>
            <h1 className="separator">:</h1>
            <h1>
                {parseTimeUnit(timeLeft.getMinutes())}
            </h1>
            <h1 className="separator">:</h1>
            <h1>
                {parseTimeUnit(timeLeft.getSeconds())}
            </h1>
        </>}
    </div>
}

export default Clock;