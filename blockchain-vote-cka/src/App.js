import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, {useState,useEffect} from 'react'
import Register from './components/Register'
import Vote from './components/Vote'
function App() {

  const [ip, setIp] = useState();

  useEffect(() => {
      const url = "http://api.ipify.org/?format=json"
      fetch(url)
      .then(response => response.json())
      .then(data =>  setIp(data.ip)
      )
  })

  return (
    <div className="App">
        <BrowserRouter >

        <h1>District 4 Vote</h1>
    

    <Switch>
          <Route exact path="/">                 
          <Register ip={ip} />
         </Route>      

         <Route path="/vote">                 
          <Vote  />
         </Route>   
    </Switch>
    </BrowserRouter>


      
    </div>
  );
}

export default App;
