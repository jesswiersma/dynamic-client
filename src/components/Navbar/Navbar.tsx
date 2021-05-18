import React, {Component} from "react";
import {Link} from "react-router-dom";
import UserContext from "../UserContext/userContext";
import RegisterUser from "../Auth/registerUser";
import appLogo from "../assets/appLogo.png";
import LoginUser from "../Auth/loginUser";
import RegisterAdmin from "../Auth/registerAdmin";
import LoginAdmin from "../Auth/loginAdmin";


interface INavbarProps {};
interface INavbarState {}

class Navbar extends Component <INavbarProps, INavbarState> {
        static contextType = UserContext;
        render () {
            return (
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#ecebea"}}>
        <div className="container-fluid">
        <Link to="/">
            <a className="navbar-brand">
              <img id="logo" src={appLogo} alt="company logo: Dynamic with face"/>
            </a>
        </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav">

                    <li className="nav-item">
                        <div className = "nav-link">
                        </div>
                    <Link to="/waterloo">Admin</Link>
                    <RegisterAdmin/>
                    <LoginAdmin/>
                        </li>
                    
                    <li className="nav-item">
                        <div className = "nav-link">
                        </div>
                    <Link to="/user">User</Link>
                    <RegisterUser/>
                    <LoginUser/>
                    </li>
   
            </ul>
            </div>
        </div>
      </nav>
    </div>
    );
}
};

export default Navbar;