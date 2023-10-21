import React, { useState } from "react";

const Timer = ()=>{
    const [timer, setTimer] = useState(15);
    return (
        <div className="timer-container">
            <p>{timer}s</p>
            <div className="timer-button-container">
                <button onClick={()=>setTimer(15)}>15s</button>
                <button onClick={()=>setTimer(30)}>30s</button>
                <button onClick={()=>setTimer(60)}>60s</button>
            </div>
        </div>
    )
}
export default Timer;