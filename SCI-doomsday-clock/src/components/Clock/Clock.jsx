import "@/index.css"
import { parseTimeUnit } from "@/utils"
import { useState } from "react"
import "./Clock.css"
import { getTimeLeft } from "../../utils"

function Clock()
{
    const [timeLeft, setTimeLeft] = useState(null) 

    const updateTime = () =>
    {
        setTimeLeft(getTimeLeft());
    }

    setInterval(updateTime, 1000)

    return <div className="clock">
        {timeLeft && <>
            <h1>
                {parseTimeUnit(timeLeft.hours)}
            </h1>
            <h1 className="separator">:</h1>
            <h1>
                {parseTimeUnit(timeLeft.minutes)}
            </h1>
            <h1 className="separator">:</h1>
            <h1>
                {parseTimeUnit(timeLeft.seconds)}
            </h1>
        </>}
    </div>
}

export default Clock;