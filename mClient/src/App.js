import React ,  { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import gql from 'graphql-tag'
import TextField from '@material-ui/core/TextField'
import { useQuery } from '@apollo/react-hooks'
import Button from '@material-ui/core/Button'
import KKKK from "./TestButton"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { client } from '.'
import { MainNavigator } from './Components/MainNavigator'
import Home from './screen/Home'
import Tv from './screen/Tv'

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

const  App = () => {
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
      <MainNavigator/>
      <Switch>
        <Route path="/TV">
          <Tv/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
