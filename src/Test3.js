import React from "react";
import {UserConsumer} from './UserContext'
class Test3 extends React.Component{
    render(){
        return(
            <UserConsumer>
                {
                (username)=>{
                    return <p>Your username is {username}</p>
                }
                }
            </UserConsumer>
        )}
}
export default Test3