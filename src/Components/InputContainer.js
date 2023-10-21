import React from "react";
import Placeholder from "../data/placeholderdata";

const InputContainer = ()=>{
    return (
        <div className="input-container">
            <form>
                  <textarea type="text" placeholder={Placeholder} />
            </form>
             
        </div>
    )
}
export default InputContainer;