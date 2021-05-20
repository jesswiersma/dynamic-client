import React, { Component, BaseSyntheticEvent} from "react";
//import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export interface RegisterUserState {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    organization: string;
    isAdmin: boolean;
}

export interface RegisterUserProps {
  setToken: (newToken: string) => void
}

class RegisterUser extends Component <RegisterUserProps, RegisterUserState> {
    constructor(props: any) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            organization: "",
            isAdmin: false,
        };
    }

    handleSubmit(e: BaseSyntheticEvent) {

        e.preventDefault();
        console.log("line before fetch")
        fetch(`http://localhost:3000/user/register`, {
            method: "POST",
            headers: new Headers ({
                "Content-Type": "application/json",
            }),
            body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
                organization: this.state.organization,
                isAdmin: this.state.isAdmin,
            }),  
            },
        )
        .then((res) => {
            if (res.status !== 201) {
                alert("Unable to register");
            } else {
                //redirect to login?
                alert("Successfully registered");
            }
            return res.json()
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        }
        )}

        handleChange(e: BaseSyntheticEvent) {
            this.setState((prevstate) => ({
                ...prevstate,
                [e.target.name]: e.target.value as Pick<
                RegisterUserState,
                keyof RegisterUserState
                >,
            }));
        }

        componentDidMount(){
            this.setState({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                organization: "",
                isAdmin: false,
            })
        }

        render() {
            return (
              <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                  <FormControl>
                    <TextField
                      label="First Name"
                      type="text"
                      name="firstName"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                      onChange={(e) => this.handleChange(e)}
                    />
                  </FormControl>
                  <FormControl>
                    <TextField
                      label="Last Name"
                      type="text"
                      name="lastName"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                      onChange={(e) => this.handleChange(e)}
                    />
                  </FormControl>
                  <FormControl>
                    <TextField
                      label="Email"
                      type="email"
                      name="email"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                      onChange={(e) => this.handleChange(e)}
                    />
                  </FormControl>
                  <FormControl>
                    <TextField
                      label="Password"
                      type="password"
                      name="password"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                      onChange={(e) => this.handleChange(e)}
                    />
                  </FormControl>
                  <FormControl>
                    <TextField
                      label="Organization"
                      type="text"
                      name="organization"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                      onChange={(e) => this.handleChange(e)}
                    />
                  </FormControl>
                  <FormControl>
                    <Button variant="outlined" color="primary" type="submit">
                      Register
                    </Button>
                  </FormControl>
                </form>
              </div>
            );
          }
        }

//         render() {
//             return (
//                 <div>
//                 <div className = "userRegister">Register User</div>
//                     <Form onSubmit = {(e) => this.handleSubmit(e)}>
//                         <FormGroup>
//                         <Label htmlFor= "firstName"></Label>
//                         <Input
//                         type = "text"
//                         placeholder = "First Name"
//                         name = "firstName"
//                         value = {this.state.firstName} 
//                         onChange = {(e) => this.handleChange(e)}
//                         />
//                         </FormGroup>
//                         <FormGroup>
//                         <Label htmlFor = "lastName"></Label>
//                         <Input 
//                         type = "text"
//                         placeholder = "Last Name"
//                         name = "lastName"
//                         value = {this.state.lastName}
//                         onChange = {(e) => this.handleChange(e)}
//                         />
//                         </FormGroup>
//                         <FormGroup>
//                         <Label htmlFor = "email"></Label>
//                         <Input
//                         name = "email"
//                         type = "text"
//                         placeholder = "email"
//                         value = {this.state.email}
//                         onChange = {(e) => this.handleChange(e)}
//                         />
//                         </FormGroup>
//                         <FormGroup>
//                         <Label htmlFor = "password"></Label>
//                         <Input
//                         name = "password"
//                         type = "text"
//                         placeholder = "password"
//                         value = {this.state.password}
//                         onChange = {(e) => this.handleChange(e)}
//                         />
//                         </FormGroup>
//                         <FormGroup>
//                         <Label htmlFor = "organization"></Label>
//                         <Input
//                         name = "organization"
//                         type = "text"
//                         placeholder = "organization"
//                         value = {this.state.organization}
//                         onChange = {(e) => this.handleChange(e)}
//                         />
//                         </FormGroup>
//                         <Button className = "userRegister" type = "submit">Register</Button>
//                     </Form>
//                 </div>
//             );
//         }
// }        
        
export default RegisterUser;     
