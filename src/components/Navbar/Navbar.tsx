import React from "react";
import UserContext from "../UserContext/userContext";
import { Container, Paper, Button, Menu, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import RegisterUser from "../Auth/registerUser";
import LoginUser from "../Auth/loginUser";
import appLogo from "../assets/appLogo.png";

interface IMenuProps {
   setToken: (newToken: string) => void
  //token: string,
}

interface IMenuState {
  anchorEl: null | HTMLElement;
  
}

class NavBar extends React.Component<any, IMenuState> {
  static contextType = UserContext;
  constructor(props: any) {
    super(props);
    this.state = {
      anchorEl: null,
      //token: "",
    };
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({
      anchorEl: e.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  render() {
    return (
        <div className="container-fluid">
                <Link to="/">
                     <a className="navbar-brand">
                       <img id="logo" src={appLogo} alt="company logo: Dynamic with face"/>
                     </a>
                 </Link>
      <Container fixed disableGutters id="NavBar">
        <Paper elevation={20}>
          <Paper>
            <Button
              aria-controls="menu"
              aria-haspopup="true"
              onClick={(e) => this.handleClick(e)}
            >
              Menu
            </Button>
            <Menu
              id="menu"
              anchorEl={this.state.anchorEl}
              keepMounted
              open={Boolean(this.state.anchorEl)}
              onClose={this.handleClose}
            >
               <MenuItem>
                <Link to="/">Home</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/login">Login</Link>
                <LoginUser setToken = {this.props.setToken}/>
              </MenuItem>
              <MenuItem>
                <Link to="/register">Register</Link>
                <RegisterUser setToken = {this.props.setToken}/>
              </MenuItem>
              <MenuItem>
                <Link to="/announcement">Announcement</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/schedule">Schedule</Link> 
              </MenuItem> 
              <MenuItem>
                <Link to="/waterloo">Admin Home</Link>
              </MenuItem> 
            </Menu>
          </Paper>
        </Paper>
      </Container>
      </div>
    );
  }
}
export default NavBar;

// import React, {Component} from "react";
// import {Link} from "react-router-dom";
// import UserContext from "../UserContext/userContext";
// import appLogo from "../assets/appLogo.png";
// import RegisterUser from "../Auth/registerUser";
// import LoginUser from "../Auth/loginUser";
// //import RegisterDisplay from "../Auth/registerDisplay";


// interface INavbarProps {};
// interface INavbarState {}

// class Navbar extends Component <INavbarProps, INavbarState> {
//         static contextType = UserContext;
//         render () {
//             return (
//                 <div>
//                     <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#ecebea"}}>
//         <div className="container-fluid">
//         <Link to="/">
//             <a className="navbar-brand">
//               <img id="logo" src={appLogo} alt="company logo: Dynamic with face"/>
//             </a>
//         </Link>
 

//         {/* <li className = "nav-item">  
//         <div className ="nav-link"> 
//         <Link to="/user/register">Register</Link>
//         </div> 
//         </li> */}


//         <Link to = "/user/register">
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon">Register</span>
//             </button>
//             </Link>
//             <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
//                 <ul className="navbar-nav">

//                     <li className="nav-item">
//                         <div className = "nav-link">
//                         </div>
//                     <Link to="/waterloo">Admin</Link>
                    
//                         </li>
                    
//                     <li className="nav-item">
//                         <div className = "nav-link">
//                         </div>
//                     <Link to="/user">User</Link>
//                     </li>

//                     <li className="nav-item">
//                         <div className = "nav-link">
//                         </div>
//                     <Link to="/schedule/">Schedules</Link>
                    
//                         </li>
                    
//                     <li className="nav-item">
//                         <div className = "nav-link">
//                         </div>
//                     <Link to="/announcement">Announcements</Link>
//                     </li>

                  
   
//             </ul>
//             </div>
//         </div>
//       </nav>
//     </div>
//     );
// }
// };

// export default Navbar;