import React, {
    BaseSyntheticEvent,
    Component,
} from "react";
import UserContext from "../UserContext/userContext";

import {Form, FormGroup, Label, Input, Button} from "reactstrap";

export interface LoginAdminState {
    email: string,
    password: string,
} 

export interface LoginAdminProps {}

class LoginAdmin extends Component <LoginAdminProps, LoginAdminState> {
    static contextType = UserContext;
    constructor(props: LoginAdminProps) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }

    handleSubmit(e: BaseSyntheticEvent) {
        e.preventDefault();
        fetch(`http://localhost:3000/waterloo/login`, {
            method: "POST",
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            this.context.setToken(data.token);
        });
    }

    //add Logout here?

    handleChange(e: BaseSyntheticEvent) {
        this.setState((prevstate) => ({
            ...prevstate,
            [e.target.name]: e.target.value as Pick<
            LoginAdminState,
            keyof LoginAdminState
            >,
        }));
    }

    render() {
        return (
            <div>
                <div className = "adminLogin">Login</div>
                <Form onSubmit = {(e) => this.handleSubmit(e)}>
                <FormGroup>
                        <Label htmlFor = "email"></Label>
                        <Input
                        name = "email"
                        type = "text"
                        placeholder = "email"
                        value = {this.state.email}
                        onChange = {(e) => this.handleChange(e)}
                        />
                        </FormGroup>
                        <FormGroup>
                        <Label htmlFor = "password"></Label>
                        <Input
                        name = "password"
                        type = "text"
                        placeholder = "password"
                        value = {this.state.password}
                        onChange = {(e) => this.handleChange(e)}
                        />
                        </FormGroup>
                        <Button type = "submit">Login</Button>
                </Form>      
            </div>
        );
    }
}

export default LoginAdmin;