import React from "react";
import FPInput from "./FPInput";
class FRParentInput extends React.Component{
    constructor(){
        super()
        this.inputRef=React.createRef();
    }
    clickHandler=()=>{
        this.inputRef.current.focus();
    }
    render(){
    return(
        <div>
            <FPInput ref={this.inputRef}/>
            <button onClick={this.clickHandler}>Focus</button>
        </div>
    )
}}
export default FRParentInput