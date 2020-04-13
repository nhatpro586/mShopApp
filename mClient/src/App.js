import React ,  { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import gql from 'graphql-tag';
import TextField from '@material-ui/core/TextField';

import { useQuery } from '@apollo/react-hooks';
import Button from '@material-ui/core/Button';
import KKKK from "./TestButton"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './screen/About'
import { client } from '.';
const get_user = gql`
query Login($username: String!, $password: String!){
  login(username: $username, password: $password) {
    _id
    name
    age
    token
  }
}
` 

function App() {
    const [test, setTest] = useState(true);
  const [count, setCount] = useState(0);

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  // const { loading, error, data } = useQuery(get_user,
  //   {
  //     variables: {
  //      username, password
  //     }
  //   })

const login = async () =>{
  const data  = await client.query(
   { 
      query: get_user,
            variables: {
       username, password
      }
  
  }
  ).catch( e => {
    alert("Login ko thanh cong")
  })
  if(data){
    alert("Login thanh cong")
  }
}

  // check state if changed
  // 1   2   3      => 1 2 3
  useEffect(() => {
    console.log("chay ham useEffect")
    //goi API => 
  });

  useEffect(()=> {
    console.log("use Effect ==>> ")
      //get list User
  }, [])

  return (
    <Router>
      <TextField id="outlined-basic" 
            onChange={text => setUsername(text.currentTarget.value) }
      label="Outlined" variant="outlined" />
      <TextField
      value={password}
      onChange={text =>  setPassword(text.currentTarget.value)} id="outlined-basic" label="Outlined" variant="outlined" />

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_self"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <KKKK test={"blue"}/>
        <Button onClick={() =>{
            login()
        }} variant="contained" color={test? "primary" : "secondary"}>
  {test ? "Primary" : "Secondary"}
</Button>

<Button onClick={() =>{
            setCount(count + 1)
        }} variant="contained" >OK</Button>
        <li><Link to="/about">About</Link></li>
      <div onClick={()=>console.log("DIV----")}> Count la {count}</div>
      </header>
    </div>
    <Switch>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        </Router>
  );
}

export default App;
