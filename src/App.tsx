import React from 'react';
import './App.css';
import {UserContextProvider} from "./components/UserContext/userContext";
import Home from "./components/Home/Home";
import LoginUser from './components/Auth/loginUser';
import RegisterUser from './components/Auth/registerUser';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AdminHome from './components/AdminHome/AdminHome';
import UserHome from "./components/UserHome/UserHome";

import {
  BrowserRouter as Router,
  Switch,
  Route,
 } from "react-router-dom";


const App: React.FunctionComponent = () => {
  return (
    <Router>
    <div className="App">
      <div>
      <UserContextProvider>
        <Navbar />
        <Switch>
          <Route path = "/user">
            <UserHome/>
          </Route>
          <Route path = "/waterloo">
            <AdminHome/>
          </Route>
          <Route path = "/user/register">
          
          </Route>

          <Route path = "/">
            <Home/>
          </Route>
        </Switch>
        <Footer/>
      </UserContextProvider>
    </div>
   </div>
   </Router>
  );
};

export default App;
