import React from "react";
import RestartBtn from "../images/restart-icon.png"


const WordController = ()=>{
    return (
        <div className="word-controller-container">
              <div className="restart-button-container">
                   <button ><img src={RestartBtn} alt="restart button"/></button>
              </div>
              <div className="esc-button-container">
                   <button>esc</button>
                   <p>-</p>
                   <p>reset</p>
              </div>
              <div className="words-length-container">
                    <div className="words-length-button-container">
                         <button>10</button>
                         <button>50</button>
                         <button>80</button>
                         <button>100</button>
                    </div>
                    <p>-</p>
                    <p>no. of words</p>
              </div>
        </div>
    )
}

export default WordController;