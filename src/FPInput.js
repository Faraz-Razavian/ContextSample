import React from "react";
const FPInput=React.forwardRef((props,ref)=>{
    return(
        <div>
            <input ref={ref}/>
        </div>
    )
})
export default FPInput