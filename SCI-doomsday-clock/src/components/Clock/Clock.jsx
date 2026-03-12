import "@/index.css"
import { parseTimeUnit } from "@/utils"
import { useState } from "react"
import "./Clock.css"
import { getTimeLeft } from "../../utils"
import TimeUnit from "../TimeUnit/TimeUnit"

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
            <TimeUnit label="Days" value={timeLeft.days} />

            <h1 className="separator">:</h1>

            <TimeUnit label="Hours" value={timeLeft.hours} />

            <h1 className="separator">:</h1>

            <TimeUnit label="Minutes" value={timeLeft.minutes} />
            
            <h1 className="separator">:</h1>

            <TimeUnit label="Seconds" value={timeLeft.seconds} />
        </>}
    </div>
}

export default Clock;