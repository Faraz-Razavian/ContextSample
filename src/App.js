import React,{Component} from 'react';
import './App.css';
import Test1 from './Test1';
import {UserProvider}from './UserContext'
// import RefDemo from'./RefDemo'
import FRParentInput from './FRParentInput';
class App extends Component {
render(){
  return (
    <div>
    {/* <RefDemo/> */}
    <FRParentInput/>
      <UserProvider value="Razavian">
        <Test1/>
      </UserProvider>
      </div>
    )
  }    
}
export default App;
