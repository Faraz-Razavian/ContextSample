import React from "react";

class RefDemo extends React.Component{
    constructor(){
        super()
        this.inputRef=React.createRef();
    }
    componentDidMount(){
        this.inputRef.current.focus();
    }
    clickHandler=()=>{
        alert(this.inputRef.current.value);
    }
    render(){
        return(
            <div>
                <input type="text" ref={this.inputRef}/>
                <button onClick={this.clickHandler}>Send</button>
            </div>
        )
    }
}
export default RefDemo