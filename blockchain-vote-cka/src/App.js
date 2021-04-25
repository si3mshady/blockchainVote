import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, {useState,useEffect} from 'react'
import Register from './components/Register'
import Vote from './components/Vote'
import Header from './components/Header'

function App() {

  const [ip, setIp] = useState();

  useEffect(() => {
      const url = "http://api.ipify.org/?format=json"
      fetch(url)
      .then(response => response.json())
      .then(data =>  setIp(reverseString(data.ip))
      )
  })

  function reverseString(str) {
   // need to reverse string to hide ip address 
   var splitString = str.split("");  
   var reverseArray = splitString.reverse();    
   var joinArray = reverseArray.join("");    
  return joinArray; 
}
 

  return (
    <div className="App">
    <div className="App__header">
    <Header />  
     
    </div>
        <BrowserRouter >

        <h1>District 4 Vote</h1>    
        {/* <Header />   */}
    

    <Switch>
          <Route exact path="/">                 
          <Register ip={ip} />
         </Route>      

         <Route path="/vote">                 
          <Vote ip={ip} />
         </Route>   
    </Switch>
    </BrowserRouter>


      
    </div>
  );
}

export default App;
