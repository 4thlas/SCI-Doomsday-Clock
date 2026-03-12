import "@/index.css"
import { parseTimeUnit } from "@/utils"
import "./TimeUnit.css"

function TimeUnit({ label, value })
{
    return <div className="time-unit">
        <h1>{parseTimeUnit(value)}</h1>
        <span>{label}</span>
    </div>
}

export default TimeUnit;